const Contact = require("../models/GoGameContact");

exports.createContact = async (req, res) => {
  try {
    let contact = new Contact(req.body);
    await contact.save();
    res.send(contact);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getContacts = async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getContact = async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404).json({ error: "The product does not exits" });
    }
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};
