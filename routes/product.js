const { Product, validate } = require("../models/product");
//const { Product_type } = require("../models/product_type");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find()
    .select("-__v")
    .sort("name");
  res.send(products);
});

router.post("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // const product_type = await Product_type.findById(req.body.product_typeId);
  // if (!product_type) return res.status(400).send("Invalid Product Type Id .");

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    // product_type: {
    //   _id: product_type._id,
    //   type: product_type.type
    // },
    numberInStock: req.body.numberInStock,
    decscription: req.body.decscription,
    imageUrl: req.body.imageUrl

  });
  await product.save();

  res.send(product);
});

router.put("/:id", [auth], async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // const product_type = await Genre.findById(req.body.product_typeId);
  // if (!product_type) return res.status(400).send("Invalid Product Type ID.");

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      // product_type: {
      //   _id: product_type._id,
      //   type: product_type.type
      // },
      numberInStock: req.body.numberInStock,
      decscription: req.body.decscription,
      imageUrl: req.body.imageUrl

    },
    { new: true }
  );

  if (!product)
    return res.status(404).send("The product with given ID was not found.");

  res.send(product);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const product = await Product.findById(req.params.id).select("-__v");

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
});

module.exports = router;
