import express from 'express'
import { createProductController, 
    getAllProductsController,
    getSpecificProductController,
    updateProductController,
    deleteProductController 
} from "../controllers/product.controller.js"

const router = express.Router()

router.route("/create-product").post(createProductController)
router.route("/all-products").get(getAllProductsController)
router.route("/:id").get(getSpecificProductController)
router.route("/edit-product/:id").post(updateProductController)
router.route("/delete-product/:id").delete(deleteProductController)

export default router