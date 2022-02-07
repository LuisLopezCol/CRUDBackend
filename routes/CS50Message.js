const express = require("express");
const router = express.Router();
const messageCS50 = require("../controllers/CS50MessageController");

router.get("/", messageCS50.getMessages);
router.post("/", messageCS50.createMessage);

module.exports = router;
