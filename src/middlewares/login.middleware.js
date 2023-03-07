const { loginValidationFields } = require('../utils/validateLoginFields');

const validateLogin = (req, res, next) => {
  const validate = loginValidationFields(req.body);
  if (validate) return res.status(400).json({ message: validate });

  next();
};

module.exports = {
  validateLogin,
};