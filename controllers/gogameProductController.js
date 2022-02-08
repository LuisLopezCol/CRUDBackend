const Product = require("../models/GoGameProduct");

exports.createProduct = async (req, res) => {
  //   console.log("creating the product....");
  //   console.log(req.body);
  try {
    let product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (error) {}
};

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: "The product does not exits" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getProductTitle = async (req, res) => {
  try {
    let product = await Product.find({
      title: { $regex: req.params.title, $options: "i" }, //with "ix" we can serach without spaces
    });
    if (!product) {
      res.status(404).json({ error: "The product does not exits" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getProductGenre = async (req, res) => {
  try {
    let product = await Product.find({
      genre: { $regex: req.params.genre, $options: "i" },
    });
    if (!product) {
      res.status(404).json({ error: "The product does not exits" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    const {
      id,
      thumbnail,
      title,
      short_description,
      game_url,
      genre,
      platform,
      publisher,
      developer,
      release_date,
      freetogame_profile_url,
      stock,
      price,
    } = req.body;
    let data_product = await Product.findById(req.params.id);

    console.log(data_product);

    if (!data_product) {
      res.status(404).json({ error: "The product does not exits" });
    }

    data_product.thumbnail = thumbnail;
    data_product.title = title;
    data_product.short_description = short_description;
    data_product.game_url = game_url;
    data_product.genre = genre;
    data_product.platform = platform;
    data_product.publisher = publisher;
    data_product.developer = developer;
    data_product.release_date = release_date;
    data_product.freetogame_profile_url = freetogame_profile_url;
    data_product.stock = stock;
    data_product.price = price;

    data_product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      data_product,
      { new: true }
    );
    res.json(data_product);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("There was a mistake, please comunicate with IT TeamPUT");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let data_product = await Product.findById(req.params.id);
    if (!data_product) {
      res.status(404).json({ msg: "The product does not exists" });
    }

    await Product.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "The product has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};
