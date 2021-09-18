export default {
  server: {
    port: process.env.PORT || '3000'
  },
  pg: {
    database: process.env.PG_DATABASE || 'postgres',
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'admin123',
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    max: 20, // set pool max size to 20
    idleTimeoutMillis: 1000, // close idle clients after 1 second
  }
};
