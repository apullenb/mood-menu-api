const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (userID) => {
  const payload = {
    user: userID,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8hr' });
};

module.exports = jwtGenerator;