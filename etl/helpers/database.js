const { Pool } = require('pg');
const Redis = require('ioredis');

const redis = {
  users: new Redis({
    port: process.env.REDISPORT,
    host: process.env.REDISHOST,
    family: process.env.REDISFAMILY,
    password: process.env.REDISPASSWORD,
    db: 0
  }),
  discussions: new Redis({
    port: process.env.REDISPORT,
    host: process.env.REDISHOST,
    family: process.env.REDISFAMILY,
    password: process.env.REDISPASSWORD,
    db: 1
  })
};

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = {
  pool,
  redis,
};
