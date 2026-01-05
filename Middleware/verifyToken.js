import jwt from "jsonwebtoken";
import UserModel from "../model/User.model.js";

export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "SECRETKEY",
      (err, verifiedToken) => {
        if (err) {
          return res.status(403).json({ message: "Invalid JWT Token" });
        }
        UserModel.findById(verifiedToken.id)
          .then((user) => {
            console.log(user)
            req.user = user;
            next();
          })
          .catch((err)=> res.status(500).json({ "message": err.message }))
      })
  } else {
    return res.status(404).json({ message: "Token Not Found" });
  }
}


