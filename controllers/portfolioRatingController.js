const Rating = require("../models/PortfolioRating");

exports.createRating = async (req, res) => {
  try {
    let rating = new Rating(req.body);
    await rating.save();
    res.send(rating);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getRatings = async (req, res) => {
  try {
    let ratings = await Rating.find();
    res.json(ratings);
  } catch (error) {}
};

exports.getRating = async (req, res) => {
  try {
    let rating = await Rating.findById(req.params.id);
    if (!rating) {
      res.status(404).json({ error: "The rating does not exit" });
    }
    res.json(rating);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.updateRating = async (req, res) => {
  try {
    console.log(req.body);
    const { name, rating, votes } = req.body;
    let RATINGS = await Rating.findById(req.params.id);

    console.log(RATINGS);

    if (!RATINGS) {
      res.status(404).json({ error: "The data does not exit" });
    }

    RATINGS.name = name;
    RATINGS.rating = rating;
    RATINGS.votes = votes;

    RATINGS = await Rating.findOneAndUpdate({ _id: req.params.id }, RATINGS, {
      new: true,
    });
    res.json(RATINGS);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("There was a mistake, please comunicate with IT TeamPUT");
  }
};
