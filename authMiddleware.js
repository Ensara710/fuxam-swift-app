const { Clerk } = require('@clerk/clerk-sdk-node');

// Load env variables
require('dotenv').config();

const clerk = new Clerk(process.env.CLERK_API_KEY);

const requireSession = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const bearerToken = authHeader?.split(' ')[1];
  if (!bearerToken) {
    res.status(401).send('No token provided');
    return;
  }
  try {
    const session = await clerk.verifyToken(bearerToken);
    req.session = session;
    next();
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};

module.exports = {
  requireSession,
};
