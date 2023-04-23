const express = require("express");
const protect = require("../generateToken");

const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  removeUser,
  authUser,
} = require("../controllers/userController");

router.post("/register", protect.protect, registerUser);
router.post("/login", loginUser);
router.get("/auth/:cardid", authUser);
router.get("/all", protect.protect, getAllUsers);
router.get("/user/details/:cardid", protect.protect, getUser);
router.delete("/user/remove/:cardid", protect.protect, removeUser);
module.exports = router;
