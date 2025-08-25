//pool.js
//test
// const { Pool } = require("pg");
// require("dotenv").config();

// module.exports = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// });

const { Pool } = require("pg");
require("dotenv").config();

const useSSL =
  process.env.DATABASE_SSL === "true" ||
  (process.env.NODE_ENV === "production" &&
    !/(railway\.internal|\.svc\.cluster)/.test(process.env.DATABASE_URL || ""));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
