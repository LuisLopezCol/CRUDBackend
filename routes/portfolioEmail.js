const express = require("express");
const router = express.Router();
const portfolioEmail = require("../controllers/portfolioEmailController");

router.get("/", portfolioEmail.sendEmailConfirmation);
router.post("/", portfolioEmail.sendEmail);

module.exports = router;
