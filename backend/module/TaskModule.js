// module/TaskModule.js

const mongoose = require("mongoose");

const getLoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  crt_pass: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
});

//for products
const productSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
});

const GetLogin = mongoose.model("GetLogin", getLoginSchema);
const AddProduct = mongoose.model("AddProduct", productSchema);

module.exports = { GetLogin, AddProduct };
