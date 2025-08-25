//pool.js

// const { Pool } = require("pg");
// require("dotenv").config();

// module.exports = new Pool({
//   connectionString: process.env.DATABASE_URL || process.env.DATABASE_PRIVATE_URL
//   ssl: { rejectUnauthorized: false },
// });

const { Pool } = require("pg");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const connectionString =
  process.env.DATABASE_URL || process.env.DATABASE_PRIVATE_URL;

if (!connectionString) {
  throw new Error("No DATABASE_URL or DATABASE_PRIVATE_URL provided");
}

module.exports = new Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});
