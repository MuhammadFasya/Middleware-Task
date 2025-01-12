const userController = require("../controllers/user-controller");
const userAuth = require("../middlewares/user-auth");

const express = require("express");
const router = express.Router();

router.get("/", userController.getUser);
router.get("/:id", userAuth, userController.getUserByIndex);
router.delete("/:id", userAuth, userController.deleteUserByIndex);

module.exports = router;
