const { userValidateFields } = require('../utils/validateUser');

const validateUser = (req, res, next) => {
  const validate = userValidateFields(req.body);
  if (validate) return res.status(400).json({ message: validate });
  next();
};

module.exports = {
  validateUser,
};