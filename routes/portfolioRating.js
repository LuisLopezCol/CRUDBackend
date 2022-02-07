const express = require("express");
const router = express.Router();
const ratingPortfolio = require("../controllers/portfolioRatingController");

router.get("/", ratingPortfolio.getRatings);
router.get("/:id", ratingPortfolio.getRating);
router.post("/", ratingPortfolio.createRating);
router.put("/:id", ratingPortfolio.updateRating);

module.exports = router;
