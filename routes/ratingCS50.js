const express = require("express");
const router = express.Router();
const ratingCS50Controller = require("../controllers/ratingCS50Controller");

router.get("/", ratingCS50Controller.getRatings);
router.get("/:id", ratingCS50Controller.getRating);
router.post("/", ratingCS50Controller.createRating);
router.put("/:id", ratingCS50Controller.updateRating);

module.exports = router;
