import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import methodOverride from "method-override";

import isSignedIn from "./middleware/is-signed-in.js";
import passUserToView from "./middleware/pass-user-to-view.js";

// server.js

import authController from "./controllers/auth.js";
import dealController from "./controllers/deal.js";

const port = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
     store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI, // MongoDB URI
      collectionName: "sessions", // optional, name of session collection
    }),
  })
);
app.use(isSignedIn);
app.use(passUserToView);

app.use("/auth", authController);
app.use("/deal", dealController);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
