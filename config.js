module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENVIRONMENT: 'develop',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/mood_menu',
  JWT_SECRET: process.env.JWT_SECRET
};