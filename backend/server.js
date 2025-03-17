import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path"
// const express = require("express");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

connectDB();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist/")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});





