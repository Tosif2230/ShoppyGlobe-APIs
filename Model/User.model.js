import mongoose from "mongoose";

//Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});
//model
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
