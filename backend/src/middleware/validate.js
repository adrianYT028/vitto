const Joi = require('joi');

/**
 * Express middleware factory for Joi validation.
 * @param {Joi.ObjectSchema} schema - Joi schema to validate against
 * @param {'body'|'params'|'query'} source - Request property to validate
 */
function validate(schema, source = 'body') {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const details = error.details.map((d) => ({
        field: d.path.join('.'),
        message: d.message.replace(/"/g, ''),
      }));

      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details,
      });
    }

    req[source] = value;
    next();
  };
}

module.exports = validate;
