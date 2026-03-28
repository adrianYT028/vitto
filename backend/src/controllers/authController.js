const bcrypt = require('bcryptjs');
const OtpSession = require('../models/OtpSession');
const { generateOtp } = require('../utils/otp');
const { signToken } = require('../utils/jwt');
const { isMongoConnected } = require('../config/mongo');

/**
 * POST /api/auth/send-otp
 */
async function sendOtp(req, res) {
  if (!isMongoConnected()) {
    return res.status(503).json({
      success: false,
      error: 'OTP service unavailable. MongoDB is not connected.',
    });
  }

  try {
    const { phone } = req.body;

    await OtpSession.deleteMany({ phone });

    const otp = generateOtp();
    const hashedOtp = await bcrypt.hash(otp, 10);

    await OtpSession.create({
      phone,
      otp: hashedOtp,
      attempts: 0,
      verified: false,
    });

    // In production: send via SMS gateway
    console.log(`[OTP] Phone: ${phone} → OTP: ${otp}`);

    return res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      expiresIn: 600,
    });
  } catch (err) {
    console.error('[sendOtp] Error:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Failed to send OTP. Please try again.',
    });
  }
}

/**
 * POST /api/auth/verify-otp
 */
async function verifyOtp(req, res) {
  if (!isMongoConnected()) {
    return res.status(503).json({
      success: false,
      error: 'OTP service unavailable. MongoDB is not connected.',
    });
  }

  try {
    const { phone, otp } = req.body;

    const session = await OtpSession.findOne({ phone, verified: false });

    if (!session) {
      return res.status(400).json({
        success: false,
        error: 'No active OTP session found. Request a new OTP.',
      });
    }

    if (session.attempts >= 3) {
      await OtpSession.deleteOne({ _id: session._id });
      return res.status(429).json({
        success: false,
        error: 'Maximum verification attempts exceeded. Request a new OTP.',
      });
    }

    session.attempts += 1;
    await session.save();

    const isValid = await bcrypt.compare(otp, session.otp);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        error: `Invalid OTP. ${3 - session.attempts} attempts remaining.`,
      });
    }

    session.verified = true;
    await session.save();

    const token = signToken({ phone, authenticatedAt: new Date().toISOString() });

    return res.status(200).json({
      success: true,
      token,
      expiresIn: '7d',
    });
  } catch (err) {
    console.error('[verifyOtp] Error:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Verification failed. Please try again.',
    });
  }
}

module.exports = { sendOtp, verifyOtp };
