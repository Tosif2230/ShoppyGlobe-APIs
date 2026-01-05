import express from 'express' // Function
import productRoutes from './Routes/products.routes.js'
import userRoutes from './Routes/user.routes.js'
import connectDB from './config/db.config.js';
//DB Connection
connectDB()

const app = express(); //Object
app.use(express.json()) //json middleware

app.get('/',(req,res)=>{
    res.send("Root Route")
})

productRoutes(app)
userRoutes(app)

const PORT = 5000
app.listen(PORT,()=>{console.log(`SERVER CONNECTED AT PORT ${PORT}`)})