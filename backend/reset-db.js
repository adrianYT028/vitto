const { Pool } = require('pg');
const config = require('./src/config/env');

const pool = new Pool({
  host: config.pg.host,
  port: config.pg.port,
  database: config.pg.database,
  user: config.pg.user,
  password: config.pg.password,
});

async function reset() {
  try {
    await pool.query('DROP TABLE IF EXISTS leads');
    console.log('Dropped old leads table');
  } catch (err) {
    console.error('Error:', err.message);
  }
  await pool.end();
}

reset();
