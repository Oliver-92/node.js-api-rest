import express from "express"
import {
    addProduct,
    deleteProduct,
    editProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory
} from "../controllers/products.controllers.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.get("/products/category/:category", getProductsByCategory)

routes.post("/products/create", addProduct)

routes.delete("/products/:id", deleteProduct)

routes.put("/products/:id", editProduct)

export default routes;