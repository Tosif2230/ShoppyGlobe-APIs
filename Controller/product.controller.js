import ProductModel from "../model/Product.model.js";

export async function createProduct(req, res) {
  try {
    const { name, price, description, stock_quantity } = req.body;
    const newProduct = await ProductModel.create({
      name,
      price,
      description,
      stock_quantity,
    });
    return res.status(201).json({ newProduct: newProduct });
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
// Fetch All Product
export async function fetchProducts(req, res) {
  try {
    const products = await ProductModel.find({});

    if (products.length === 0) {
      return res.status(404).json("Product not available");
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
// Fetch Product by ID
export async function fetchProductbyID(req, res) {
  try {
    const fatchProductbyID = await ProductModel.findById(req.params.id)
    return res.status(200).json(fatchProductbyID); 
    
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
//Update Product by ID
export async function updateProduct(req, res) {
  try {
    let updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).json(updatedProduct);    
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
//Delete Product by ID
export async function deleteProduct(req, res) {
  try {
    let deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)
    if(!deletedProduct){
      return res.status(404).json("Produt Unavailable")
    }
    return res.status(200).json({"Deleted Product": deletedProduct});  
  
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}