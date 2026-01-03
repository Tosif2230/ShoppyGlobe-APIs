import express from 'express' // Function
import mongoose from 'mongoose';
const app = express(); //Object

//DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Product') //Promise
.then((resp)=>{ console.log("Data-Base CONNECTED") })
.catch((err)=>{ console.log("Error while connecting Data-Base") })


app.get('/',(req,res)=>{
    res.send("Welcome to root path")

})


const PORT = 5050
app.listen(PORT,()=>{console.log(`SERVER CONNECTED AT PORT ${PORT}`)})