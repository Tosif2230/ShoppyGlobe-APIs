import mongoose from 'mongoose';


//Schema
const productSchema = new mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    rating: Number,
    discription: String,
});
//model
const ProductModel = mongoose.model("Product", productSchema)

export default ProductModel;