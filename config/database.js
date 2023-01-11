module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'bd-strapi-api.ck6reof24v4s.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 33016),
      database: env('DATABASE_NAME', 'guitarla-strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'pieromarcoz'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
