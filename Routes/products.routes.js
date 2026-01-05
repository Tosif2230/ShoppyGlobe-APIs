import {
  createProduct,
  fetchProducts,
  fetchProductbyID,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";

export default function productRoutes(app) {
  //Create Product
  app.post("/api/products", verifyToken, createProduct);
  //Read or get all products
  app.get("/api/products", verifyToken, fetchProducts);
  //Get product by ID
  app.get("/api/products/:id", fetchProductbyID);
  // update
  app.patch("/api/products/:id", updateProduct);
  //Delete
  app.delete("/api/products/:id", deleteProduct);
}
