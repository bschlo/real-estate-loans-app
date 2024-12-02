import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";

import User from "../models/user.js";

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs");
});

router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in.ejs");
});

router.get("/sign-out", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.post("/sign-up", async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (userInDatabase) {
      return res.send("Username already exists.");
    }

    if (req.body.username.length < 4) {
      return res.send("Username must be longer than 4 characters");
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.send("Password and Confirm Password must match");
    }

    if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/.test(
        req.body.password
      )
    ) {
      return res.send(
        "Provide one upper and one lower case letter, one number, and one special character."
      );
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    await User.create(req.body);

    res.redirect("/auth/sign-in");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (!userInDatabase) {
      return res.send("Login failed. Please try again.");
    }

    const validPassword = bcrypt.compareSync(
      req.body.password,
      userInDatabase.password
    );
    if (!validPassword) {
      return res.send("Login failed. Please try again.");
    }
    req.session.user = {
      username: userInDatabase.username,
      _id: userInDatabase._id,
    };

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

export default router;
