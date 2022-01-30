module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38ede83a81cda31f700611cbbb0f98d9'),
  },
});
