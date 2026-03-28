const mongoose = require('mongoose');
const config = require('./env');

let mongoConnected = false;

async function connectMongo() {
  try {
    await mongoose.connect(config.mongoUri, {
      dbName: 'vito',
      serverSelectionTimeoutMS: 3000, // Fail fast if MongoDB isn't running
    });
    mongoConnected = true;
    console.log('[MongoDB] Connected successfully');
  } catch (err) {
    mongoConnected = false;
    console.warn('[MongoDB] Not available — OTP features disabled. Leads API will work fine.');
    console.warn('[MongoDB] To enable OTP: install MongoDB and restart the server.');
  }
}

function isMongoConnected() {
  return mongoConnected;
}

module.exports = { connectMongo, isMongoConnected };
