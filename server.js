import express from 'express' // Function
import mongoose from 'mongoose';
const app = express(); //Object

//DB Connection
mongoose.connect('mongodb+srv://techietosif_db_user:nmTgYiPmLeeJJHD5@cluster0.vxtjvbt.mongodb.net/') //Promise
.then((resp)=>{ console.log("DB CONNECTED") })
.catch((err)=>{ console.log("Error while connecting DB") })


app.get('/',(req,res)=>{
    res.send("Welcome to root path")

})


const PORT = 5050
app.listen(PORT,()=>{console.log(`SERVER CONNECTED AT PORT ${PORT}`)})