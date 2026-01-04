import mongoose from "mongoose";

//Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  stock_quantity: Number,
});
//model
const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
