const Joi = require('joi');
const mongoose = require('mongoose');


const Product = mongoose.model('Products', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  price: {
    type: Number,
    required: true,
    min: 0

  },

  // product_type: {
  //   type: product_typeSchema,
  //   required: true
  // },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  decscription: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true
  }
}));

function validateProduct(product) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    price: Joi.number().min(0).required(),
    //product_typeId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0).required(),
    decscription : Joi.string().required(),
    imageUrl:Joi.string().required()
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;