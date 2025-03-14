import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});





