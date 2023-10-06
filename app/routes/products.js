import express from "express"

// Controllers:
import { createProduct, findProduct, updateProduct, deleteProduct, getProducts } from "../controllers/products.js"

const productsRouter = express.Router()

// Routes:
productsRouter.post("/", createProduct)
productsRouter.get("/:id", findProduct)
productsRouter.put("/:id", updateProduct)
productsRouter.delete("/:id", deleteProduct)
productsRouter.get("/", getProducts)

export { productsRouter }
