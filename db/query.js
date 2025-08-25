//query.js

const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertMessage(text, user) {
  await pool.query('INSET INTO MESSAGES (text, "user" VALUES ($1, $2)', [
    text,
    user,
  ]);
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
