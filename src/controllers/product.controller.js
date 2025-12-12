import { createProduct, 
    getAllProducts, 
    getSpecificProduct,
    updateProduct, 
    deleteProduct
 } from "../models/product.model.js";

const createProductController = async (req, res) => {
  try {
    const newProduct = await createProduct(req.body);

    if (!newProduct) {
      return res.status(400).json({ message: "Product not created..." });
    }

    return res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();  // ← FIXED (added await)

    return res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSpecificProductController = async(req, res) => {
    try {
        const product = await getSpecificProduct(req.params.id)
        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.status(200).json({
            message: "Product fetched successfully!",
            data: product
        })
    } catch (error) {
        console.log("Internal server ERROR...")
        return res.status(500).json({
            message: error.message
        })
    }
}

const updateProductController = async(req, res) => {
    try {
        const product = await updateProduct(req.params.id, req.body)
        if(!product){
            return res.status(404).json({
                message: "Product not found..."
            })
        }
        
        return res.status(200).json({
            message: "Product Updated successfully",
            data: product
        })
    } catch (error) {
        console.log("Internal Server Error!")
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteProductController = async(req, res) => {
    try {
        await deleteProduct(req.params.id)

        return res.status(200).json({
            message: "Product deleted successfully!",
        })
    } catch (error) {
        console.log("Internal Server Error!")
        res.status(500).json({
            message: error.message
        })
    }
}

export { createProductController, 
    getAllProductsController, 
    getSpecificProductController, 
    updateProductController,
    deleteProductController
};
