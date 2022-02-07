const express = require("express");
const router = express.Router();
const ratingCS50 = require("../controllers/CS50RatingController");

router.get("/", ratingCS50.getRatings);
router.get("/:id", ratingCS50.getRating);
router.post("/", ratingCS50.createRating);
router.put("/:id", ratingCS50.updateRating);

module.exports = router;
