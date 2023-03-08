const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;