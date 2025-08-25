//query.js

const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );
  return rows;
}

async function getMessageById(id) {
  try {
    console.log("Fetching message with id:", id);
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);
    console.log("Message fetched:", rows[0]);
    return rows[0];
  } catch (error) {
    console.error("Error in getMessageById:", error);
    throw error;
  }
}

async function insertMessage(text, user) {
  await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
    text,
    user,
  ]);
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
