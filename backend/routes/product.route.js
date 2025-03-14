import express from "express"
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import {getProducts, createProduct, deleteProduct, modifyProduct} from "../controllers/product.controller.js";

const router = express.Router()
export default router

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", modifyProduct);

