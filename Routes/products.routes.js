import { createProduct, fetchProducts, fetchProductbyID, updateProduct, deleteProduct } from "../controller/product.controller.js"


export default function productRoutes(app){
    //Create Product
    app.post('/api/products', createProduct)
    //Read or get all products
    app.get('/api/products', fetchProducts)
    //Get product by ID
    app.get('/api/product/:id', fetchProductbyID )
    // update
    app.patch('/api/product/:id', updateProduct )
    //Delete
    app.delete('/api/product/:id', deleteProduct)

}