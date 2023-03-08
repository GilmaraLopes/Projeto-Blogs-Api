const { generateToken } = require('../utils/token');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
  const response = await userService.createUser(displayName, email, password, image);
  if (response.status) return res.status(409).json({ message: response.message });
  const token = generateToken({ response });
  res.status(201).json({ token });
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
};

const getUser = async (req, res) => {
    const users = await userService.getUser();
    res.status(200).json(users);
};

module.exports = {
  createUser,
  getUser,
};