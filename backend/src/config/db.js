const { Pool } = require('pg');
const config = require('./env');

// Use DATABASE_URL if available (Render), otherwise individual vars (local)
const poolConfig = config.databaseUrl
  ? {
      connectionString: config.databaseUrl,
      ssl: config.nodeEnv === 'production' ? { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    }
  : {
      host: config.pg.host,
      port: config.pg.port,
      database: config.pg.database,
      user: config.pg.user,
      password: config.pg.password,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    };

const pool = new Pool(poolConfig);

pool.on('connect', () => {
  console.log('[PostgreSQL] Client connected');
});

pool.on('error', (err) => {
  console.error('[PostgreSQL] Unexpected error:', err.message);
});

async function initializeDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE EXTENSION IF NOT EXISTS "pgcrypto";

      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        institution_name VARCHAR(255) NOT NULL,
        institution_type VARCHAR(50) CHECK (institution_type IN ('bank', 'nbfc', 'mfi')),
        city VARCHAR(100),
        loan_book_size VARCHAR(50),
        status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'demo_scheduled', 'closed')),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
      CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
    `);
    console.log('[PostgreSQL] Leads table initialized');
  } catch (err) {
    console.error('[PostgreSQL] Initialization error:', err.message);
  } finally {
    client.release();
  }
}

module.exports = { pool, initializeDB };
