const { Router } = require('express');
const Joi = require('joi');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { createLead, getLeadById } = require('../controllers/leadsController');

const router = Router();

const createLeadSchema = Joi.object({
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{9,14}$/).allow('', null),
  institution_name: Joi.string().trim().min(2).max(255).required(),
  institution_type: Joi.string().valid('bank', 'nbfc', 'mfi').required(),
  city: Joi.string().trim().max(100).allow('', null),
  loan_book_size: Joi.string().max(50).allow('', null),
});

const getLeadParamsSchema = Joi.object({
  id: Joi.string().uuid().required().messages({
    'string.guid': 'Lead ID must be a valid UUID',
  }),
});

router.post('/', auth, validate(createLeadSchema), createLead);
router.get('/:id', auth, validate(getLeadParamsSchema, 'params'), getLeadById);

module.exports = router;
