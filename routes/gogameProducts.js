const express = require("express");
const router = express.Router();
const productController = require("../controllers/gogameProductController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.get("/title/:title", productController.getProductTitle);
router.get("/genre/:genre", productController.getProductGenre);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
