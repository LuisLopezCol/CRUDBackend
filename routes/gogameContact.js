const express = require("express");
const router = express.Router();
const contactController = require("../controllers/gogameContactController");

router.get("/", contactController.getContacts);
router.post("/", contactController.createContact);
router.get("/:id", contactController.getContact);

module.exports = router;
