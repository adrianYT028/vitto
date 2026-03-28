const app = require('./src/app');
const config = require('./src/config/env');
const { initializeDB } = require('./src/config/db');
const { connectMongo } = require('./src/config/mongo');

async function start() {
  console.log('─────────────────────────────────────');
  console.log('  Vitto API Server');
  console.log('─────────────────────────────────────');

  // Connect databases
  await connectMongo();
  await initializeDB();

  // Start server
  app.listen(config.port, () => {
    console.log(`[Server] Running on http://localhost:${config.port}`);
    console.log(`[Server] Environment: ${config.nodeEnv}`);
    console.log('─────────────────────────────────────');
  });
}

start().catch((err) => {
  console.error('[Fatal] Server failed to start:', err.message);
  process.exit(1);
});
