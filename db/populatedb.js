//populatedb.js

// require("dotenv").config();
// const { Client } = require("pg");

// const SQL = `

// CREATE TABLE IF NOT EXISTS messages (

// id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// text TEXT NOT NULL,
// "user" VARCHAR(255) NOT NULL,
// added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// INSERT INTO messages (text, "user")
// VALUES
// ('Hey, I''ll see you at the party later!', 'Ana'),
// ('OMW to pick you up! Don''t forget the beer!', 'Jeff'),
// ('I''m waiting outside. Lets roll!', 'Jeff');
// `;

// async function main() {
//   console.log("seeding...");
//   const connectionString = process.argv[2] || process.env.DATABASE_URL;
//   if (!connectionString) {
//     console.error(
//       "Provide connection string as arg on in .env as DATABASE_URL"
//     );
//     process.exit(1);
//   }

//   const client = new Client({
//     connectionString,
//     ssl: { rejectUnauthorized: false },
//   });

//   try {
//     await client.connect();
//     await client.query(SQL);
//     console.log("done");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     await client.end();
//   }
// }

// main();

// populatedb.js
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  "user" VARCHAR(255) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "user") VALUES
('Hey, I''ll see you at the party later!', 'Ana'),
('OMW to pick you up! Don''t forget the beer!', 'Jeff'),
('I''m waiting outside. Lets roll!', 'Jeff');
`;

async function main() {
  console.log("seeding...");
  const connectionString = process.argv[2] || process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("Provide connection string as arg or set .env DATABASE_URL");
    process.exit(1);
  }

  const useSSL =
    process.env.DATABASE_SSL === "true" ||
    (process.env.NODE_ENV === "production" &&
      !/(railway\.internal|\.svc\.cluster)/.test(connectionString));

  const client = new Client({
    connectionString,
    ssl: useSSL ? { rejectUnauthorized: false } : false,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();
