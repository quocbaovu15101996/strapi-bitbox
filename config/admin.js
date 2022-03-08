module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '10d931c9d5c5c4c46f19242200411cb5'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
