import express from 'express' // Function
import mongoose from 'mongoose';
import productRoutes from './Routes/products.routes.js'
//DB Connection
mongoose.connect('mongodb+srv://techietosif_db_user:nmTgYiPmLeeJJHD5@cluster0.vxtjvbt.mongodb.net/ShoppyGlobe') //Promise
.then((resp)=>{ console.log("DB CONNECTED") })
.catch((err)=>{ console.log("Error while connecting DB") })

const app = express(); //Object
app.use(express.json()) //json middleware

app.get('/',(req,res)=>{
    res.send("Root Route")
})

productRoutes(app)

const PORT = 5000
app.listen(PORT,()=>{console.log(`SERVER CONNECTED AT PORT ${PORT}`)})