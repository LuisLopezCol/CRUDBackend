const express = require("express");
const router = express.Router();
const CS50Download = require("../controllers/CS50DownloadControllers");

router.get("/", CS50Download.getDownload);

module.exports = router;
