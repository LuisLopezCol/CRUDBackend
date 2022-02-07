const express = require("express");
const router = express.Router();
const portfolioDownload = require("../controllers/portfolioDownloadController");

router.get("/", portfolioDownload.getDownload);

module.exports = router;
