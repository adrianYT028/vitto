const { pool } = require('../config/db');

/**
 * POST /api/leads
 * Creates a new lead in PostgreSQL
 */
async function createLead(req, res) {
  try {
    const { email, phone, institution_name, institution_type, city, loan_book_size } = req.body;

    const result = await pool.query(
      `INSERT INTO leads (email, phone, institution_name, institution_type, city, loan_book_size)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [email, phone, institution_name, institution_type, city, loan_book_size]
    );

    return res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[createLead] Error:', err.message);

    if (err.code === '23505') {
      return res.status(409).json({
        success: false,
        error: 'A lead with this email already exists.',
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Failed to create lead. Please try again.',
    });
  }
}

/**
 * GET /api/leads/:id
 * Retrieves a lead record by UUID
 */
async function getLeadById(req, res) {
  try {
    const { id } = req.params;

    const result = await pool.query('SELECT * FROM leads WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[getLeadById] Error:', err.message);

    if (err.code === '22P02') {
      return res.status(400).json({
        success: false,
        error: 'Invalid lead ID format.',
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve lead.',
    });
  }
}

module.exports = { createLead, getLeadById };
