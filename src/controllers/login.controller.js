const { generateToken } = require('../utils/token');
const userService = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = generateToken({ user });
  res.status(200).json({ token });
};

module.exports = {
  login,
};