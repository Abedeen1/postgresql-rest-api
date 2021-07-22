"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
/**
 * This function comment is parsed by doctrine
 * @route GET /users
 * @group foo - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
var list = [{ "id": 1, "name": "Batman", "email": "batman@heroes.com1" }, { "id": 2, "name": "Superman", "email": "superman@heroes.com" }];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json(list);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Internal server error");
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    list.forEach((item) => {
        if (item.id == id)
            return res.status(200).json(item);
    });
    return res.status(200).json({});
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    list.push(req.body);
    res.json({
        message: "User Added successfully",
        body: {
            user: { name, email },
        },
    });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    list.forEach((item) => {
        if (item.id == id)
            return item = req.body;
    });
    res.json("User Updated Successfully");
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    var count = 0;
    var found = -1;
    list.forEach((item) => {
        if (item.id == id)
            found = count;
        count++;
    });
    if (found != -1) {
        list.splice(found, 1);
        res.json(`User ${id} deleted Successfully`);
    }
    else {
        res.json(`User ${id} not deleted`);
    }
});
exports.deleteUser = deleteUser;
