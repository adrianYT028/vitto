const { Router } = require('express');
const Joi = require('joi');
const validate = require('../middleware/validate');
const { sendOtp, verifyOtp } = require('../controllers/authController');

const router = Router();

// Validation schemas
const sendOtpSchema = Joi.object({
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{9,14}$/)
    .required()
    .messages({
      'string.pattern.base': 'Phone must be a valid number with 10-15 digits, optionally prefixed with +',
    }),
});

const verifyOtpSchema = Joi.object({
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{9,14}$/)
    .required(),
  otp: Joi.string()
    .length(6)
    .pattern(/^\d+$/)
    .required()
    .messages({
      'string.length': 'OTP must be exactly 6 digits',
      'string.pattern.base': 'OTP must contain only digits',
    }),
});

/**
 * POST /api/auth/send-otp
 */
router.post('/send-otp', validate(sendOtpSchema), sendOtp);

/**
 * POST /api/auth/verify-otp
 */
router.post('/verify-otp', validate(verifyOtpSchema), verifyOtp);

module.exports = router;
