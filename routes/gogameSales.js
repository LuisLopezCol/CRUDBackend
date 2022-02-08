const express = require("express");
const router = express.Router();
const saleController = require("../controllers/gogameSaleController");

router.get("/", saleController.getSales);
router.post("/", saleController.createSale);
router.get("/:id", saleController.getSale);
router.put("/:id", saleController.updateSale);
router.delete("/:id", saleController.deleteSale);

module.exports = router;
