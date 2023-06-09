const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
      message: '"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
    message: '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    message: '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

 const userValidateFields = (body) => {
    const { error } = userSchema.validate(body);
    if (error) return error.details[0].message;
    return false;
  };

module.exports = { 
  userValidateFields,
};
