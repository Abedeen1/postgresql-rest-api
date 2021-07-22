import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index.controller";
router.get('/', function(req, res) {
  res.send('<a href =\"http://localhost:3000/api-docs\"> Swagger</a>')
});
/**
 * This function comment is parsed by doctrine
 * @route GET /users
 * @returns {"id":1,"name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get("/users", getUsers);

/**
 * This function comment is parsed by doctrine
 * @route GET /users/:id
 * @returns {"id":1,"name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get("/users/:id", getUserById);
/**
 * This function comment is parsed by doctrine
 * @route POST /users
 * @returns {name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post("/users", createUser);

/**
 * This function comment is parsed by doctrine
 * @route PUT /users/:id
 * @returns {"":1,"name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.put("/users/:id", updateUser);
/**
 * This function comment is parsed by doctrine
 * @route DELETE /users/:id
 * @returns {} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.delete("/users/:id", deleteUser);

export default router;
