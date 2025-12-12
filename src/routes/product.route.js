import express from 'express'
import { createProductController, 
    getAllProductsController,
    getSpecificProductController }
    from "../controllers/product.controller.js"

const router = express.Router()

router.route("/create-product").post(createProductController)
router.route("/all-products").get(getAllProductsController)
router.route("/:id").get(getSpecificProductController)

export default router