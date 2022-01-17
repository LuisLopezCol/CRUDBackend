const express = require("express");
const router = express.Router();
const messageCS50Controller = require("../controllers/messageCS50Controller");

router.get("/", messageCS50Controller.getMessages);
router.post("/", messageCS50Controller.createMessage);

module.exports = router;
