//controller
const db = require("../db/query");

async function getMessage(req, res) {
  try {
    const messageId = parseInt(req.params.id);
    const message = await db.getMessageById(messageId);

    if (!message) {
      return res.status(400).send("Message not found!");
    }

    res.render("message.ejs", {
      title: "Message Details",
      message: messages[messageId],
    });
  } catch (error) {
    console.error("Error getting message:", error);
    res.status(500).send("Error getting message");
  }
}

async function getIndex(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index.ejs", { title: "Mini Messageboard", messages: messages });
  } catch (error) {
    console.error("Could not find messages:", error);
    res.status(500).send("Could not find messages!");
  }
}

async function createNewMessagePost(req, res) {
  try {
    const { message: text, user } = req.body;
    await db.insertMessage(text, user);
    res.redirect("/");
  } catch (error) {
    console.error("Error writing new message", error);
    res.status(500).send("Error writing new message.");
  }
}

module.exports = {
  getMessage,
  getIndex,
  createNewMessagePost,
};
