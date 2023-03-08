const { User } = require('../models');

 const error = (status, message) => ({ status, message });

const createUser = async (displayName, email, password, image) => {
 const hasEmail = await User.findOne({ where: { email } });

  if (hasEmail) throw error(409, 'User already registered');
  
  const user = User.create({ displayName, email, password, image });
  return user;
};

const getUser = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

  module.exports = {
    createUser,
    getUser,
};