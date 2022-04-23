module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'acbd46bc8f4bbb365c1ba0089da1f292'),
  },
});
