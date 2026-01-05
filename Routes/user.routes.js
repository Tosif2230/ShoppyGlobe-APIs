import { deletedUser, fetchUsers, login, regester, updateUserbyID, UserbyId, } from "../controller/user.controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";

export default function userRoutes(app) {
  //Create User
  app.post("/api/regester", regester);
  app.post("/api/login", login);
  //Read Get User by ID
  app.get('/api/users', fetchUsers)
  app.get('/api/users/:id', UserbyId)
  // Update
  app.patch('/api/users/:id',verifyToken , updateUserbyID)
  //Delete
  app.delete('/api/users/:id',deletedUser)
}
