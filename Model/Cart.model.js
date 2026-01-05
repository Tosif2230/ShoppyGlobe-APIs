import mongoose from "mongoose";

//Schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

// Model
const CartModel = mongoose.model("Cart", cartSchema);
export default CartModel;
