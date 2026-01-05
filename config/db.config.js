import mongoose from "mongoose";

function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://techietosif_db_user:nmTgYiPmLeeJJHD5@cluster0.vxtjvbt.mongodb.net/ShoppyGlobe"
    ) //Promise
    .then((resp) => {
      console.log("DB CONNECTED");
    })
    .catch((err) => {
      console.log("Error while connecting DB");
    });
}
export default connectDB;
