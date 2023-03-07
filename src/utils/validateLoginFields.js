const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    }).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
 });

  const loginValidationFields = (login) => {
    const { error } = loginSchema.validate(login);
    if (error) return error.details[0].message;
    return false;
  };

module.exports = {
  loginValidationFields,
};