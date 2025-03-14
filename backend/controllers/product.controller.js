import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
   // List all products in the database
   try{
     const products = await Product.find({});
     if (!products) {
       return res.status(404).json({ success: false, message: "Products not found" });
     }
     res.status(200).json({ success: true, product: products });
   }
   catch (error) {
     console.log("Error in listing products:", error);
     res.status(500).json({ success: false, message: "Error listing products" });
   }
 };

 export const createProduct = async (req, res) => {
   // Create a new product in the database
   const product = req.body;
   if (!product.name || !product.price || !product.image) {
     return res.status(400).json({ success: false, message: "Invalid product data" });
   }
 
   try {
     const newProduct = new Product(product);
     await newProduct.save();

     res.status(201).json({ success: true, product: newProduct });
   } catch (error) {
     console.log("Error in creating product:", error);
     res.status(500).json({ success: false, message: "Error creating product" });
   }
};

 export const deleteProduct = async (req, res) => {
   // Delete product by ID
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid product ID")
      return res.status(404).json({ success: false, message: "Not found. Invalid product ID" });
    }
    
   try {
     await Product.findByIdAndDelete(id);
     return res.status(200).json({ success: true, message: "Product deleted" });
   }
   catch (error) {
     console.log("Error in deleting product:", error);
     return res.status(500).json({ success: false, message: "Server error" });
   }
 };

 export const modifyProduct = async (req, res) => {
   // Update a product in the database vy ID
   const { id } = req.params;
   const product = req.body;
 
   if (!product.name || !product.price || !product.image) {
     console.log("Not all fields given.")
     return res.status(400).json({ success: false, message: "Invalid product data" });
   }
   
   
   if (!mongoose.Types.ObjectId.isValid(id)) {
     console.log("Invalid product ID")
     return res.status(404).json({ success: false, message: "Not found. Invalid product ID" });
   }
   
   try {
     const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
     if (!updatedProduct) {
       return res.status(404).json({ success: false, message: "Product not found" });
     }
     res.status(200).json({ success: true, product: updatedProduct });
   }
   catch (error) {
     console.log("Error in updating product:", error);
     return res.status(500).json({ success: false, message: "Error updating product" });
   }
 };