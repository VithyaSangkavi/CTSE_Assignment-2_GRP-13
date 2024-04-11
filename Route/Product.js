const express = require("express");
const router = express.Router();
const Product = require("../Controller/Product");

router.route("/add").post(Product.addNewProduct);
router.route("/update/:id").put(Product.updateProduct);

module.exports = router;
