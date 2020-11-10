const express = require("express");
const router = express.Router();

const passport = require("passport");
const oAuthRouter = require("./oauth");
const userController = require("../../controllers/user_controller");

router.use("/oauth", oAuthRouter);

router.get(
  "/status",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(201).json({ message: "ok" });
  }
);

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  userController.getAllUsers
);

router.post("/signup", userController.signup);
router.post("/login", userController.localLogin);

// TODO: object storage 사용해야됨. user의 imageurl에 할당.
router.post("/upload");

module.exports = router;
