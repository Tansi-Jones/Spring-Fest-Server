import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

// Access the routes by importing it into index.js
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

// read the “body” of an incoming JSON object.
//// OLD METHOD ///////////
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//allows servers to specify not only who can access the assets, but also how they can be accessed
app.use(
  cors({
    origin: "*", // restrict calls to those this address
    methods: "GET,PUT,PATCH,POST,DELETE", // only allow GET requests
  })
);

// Set-up the starting route for all route in post.js
app.use("/api/user", userRoutes);

//Our access port. Changes when we deploy with heroku
const PORT = process.env.PORT || 5000;

// Call the mongoose servers database
connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));
