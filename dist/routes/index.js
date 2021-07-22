"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controller_1 = require("../controllers/index.controller");
/**
 * This function comment is parsed by doctrine
 * @route GET /users
 * @returns {"id":1,"name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get("/users", index_controller_1.getUsers);
/**
 * This function comment is parsed by doctrine
 * @route GET /users/:id
 * @returns {"id":1,"name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get("/users/:id", index_controller_1.getUserById);
/**
 * This function comment is parsed by doctrine
 * @route POST /users
 * @returns {name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post("/users", index_controller_1.createUser);
/**
 * This function comment is parsed by doctrine
 * @route PUT /users/:id
 * @returns {"":1,"name":"","email":""} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.put("/users/:id", index_controller_1.updateUser);
/**
 * This function comment is parsed by doctrine
 * @route DELETE /users/:id
 * @returns {} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.delete("/users/:id", index_controller_1.deleteUser);
exports.default = router;
