const Message = require("../models/Message");

exports.createMessage = async (req, res) => {
  try {
    let message = new Message(req.body);
    await message.save();
    res.send(message);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getMessages = async (req, res) => {
  try {
    let messages = await Message.find();
    res.json(messages);
  } catch (error) {}
};
