export default {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',

  // Add more configuration as needed
  api: {
    prefix: '/api',
    version: 'v1'
  }
};
