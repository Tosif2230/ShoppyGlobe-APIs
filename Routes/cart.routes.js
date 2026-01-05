import {
  addToCart,
  getUserCart,
  updateCartItem,
  removeCartItem,
} from "../controller/cart.controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";

export default function cartRoutes(app) {
  // Add to cart
  app.post("/api/cart", verifyToken, addToCart);

  // Get logged-in user's cart
  app.get("/api/cart", verifyToken, getUserCart);

  // Update quantity
  app.patch("/api/cart/:id", verifyToken, updateCartItem);

  // Remove item
  app.delete("/api/cart/:id", verifyToken, removeCartItem);
}
