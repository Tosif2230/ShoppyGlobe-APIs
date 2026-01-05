import bcrypt from "bcrypt";
import UserModel from "../model/User.model.js";
import jwt from "jsonwebtoken";

//hash
export async function regester(req, res) {
  try {
    let { fullName, email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({ Message: "User Already Exist" });
    } else {
      const newUser = await UserModel.create({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      return res.status(201).json({ "User Created": newUser });
    }
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}

//compare
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User Doesnot Exist" });
    }
    let validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }
    //JWT Token
    const token = jwt.sign({ id: user._id }, "SECRETKEY");
    return res.status(200).json({
      user: {
        fullName: user.fullName,
        email: user.email,
      },
      accessToken: token,
    });
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
// Get User by ID
export async function UserbyId(req, res) {
  try {
    let User = await UserModel.findById(req.params.id);
    return res.status(200).json(User);
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
export async function fetchUsers(req, res) {
  try {
    let allUsers = await UserModel.find({});
    if (allUsers.length === 0) {
      return res.status(404).json("No user found");
    }
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}

// Update User by ID
export async function updateUserbyID(req, res) {
  try {
    let updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
//delete
export async function deletedUser(req, res) {
  try {
    let deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json("User not Exist");
    }
    return res.status(200).json({ "Deleted User": deletedUser });
  } catch (err) {
    return res.status(500).json({ errorMessage: err });
  }
}
