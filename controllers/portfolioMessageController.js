const MessageP = require("../models/PortfolioMessage");

exports.createMessage = async (req, res) => {
  try {
    let message = new MessageP(req.body);
    await message.save();
    res.send(message);
    console.log(message);
    console.log("it´s here");
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getMessages = async (req, res) => {
  try {
    let messages = await MessageP.find();
    res.json(messages);
  } catch (error) {}
};
