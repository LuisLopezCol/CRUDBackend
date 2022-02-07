const express = require("express");
const router = express.Router();
const messagePortfolio = require("../controllers/portfolioMessageController");

router.get("/", messagePortfolio.getMessages);
router.post("/", messagePortfolio.createMessage);

module.exports = router;
