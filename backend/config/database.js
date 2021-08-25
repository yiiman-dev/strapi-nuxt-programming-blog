module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT', 'sqlite'),
        filename: env('d', '.tmp/data.db'),
        port: env.int('DATABASE_PORT', 3306),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ''),
        database: env('DATABASE_NAME', 'pblog'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
