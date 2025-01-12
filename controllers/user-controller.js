const userModel = require("../models/user-model");

const getUser = (req, res) => {
  try {
    const users = userModel.getUser();
    if (users.length === 0) {
      res.status(200).json({ message: "Empty Data User" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserByIndex = (req, res) => {
  try {
    const user = userModel.getUserByIndex(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUserByIndex = (req, res) => {
  try {
    const id = req.params.id - 1; // Index di array dimulai dari 0
    const result = userModel.deleteUser(id);
    if (result === "Invalid Index") {
      res.status(404).json({ message: "User not found" });
    } else {
      res
        .status(200)
        .json({ message: "User deleted successfully", data: result });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getUser, getUserByIndex, deleteUserByIndex };
