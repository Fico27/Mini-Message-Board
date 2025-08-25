//controller

async function getMessage(req, res) {
  const messageId = parseInt(req.params.id);
  res.render("message.ejs", {
    title: "Message Details",
    message: messages[messageId],
  });
}

async function getIndex(req, res) {
  res.render("index.ejs", { title: "Mini Messageboard", messages: messages });
}

async function createNewMessagePost(req, res) {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
}

module.exports = {
  getMessage,
  getIndex,
  createNewMessagePost,
};
