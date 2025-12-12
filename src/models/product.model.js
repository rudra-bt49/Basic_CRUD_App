import { pool } from "../config/db.js"

const createProduct = async (product) => {
    const query = `INSERT INTO products (name, description, price, qty, isavailable)
                   VALUES ($1,$2,$3,$4,$5)
                   RETURNING *;`;

    const values = [product.name, product.description, product.price, product.qty, product.isavailable]

    const result = await pool.query(query, values);
    return result.rows[0];
}

const getAllProducts = async () => {
    const products = await pool.query("SELECT * FROM products");
    return products.rows;
}

const getSpecificProduct = async (id) => {
    const result = await pool.query("select * from products where id = $1", [id])
    return result.rows[0]
}

const updateProduct = async (id, product_data) => {
    const query = `UPDATE products SET 
                    name = $1, 
                    description = $2,
                    price = $3,
                    qty = $4,
                    isavailable = $5,
                    updated_at = NOW()
                    WHERE id = $6
                    RETURNING *;`;

    const values = [
        product_data.name,
        product_data.description,
        product_data.price,
        product_data.qty,
        product_data.isavailable,
        id
    ]

    const result = await pool.query(query, values)
    return result.rows[0];
}

const deleteProduct = async(id) => {
    const result = await pool.query("DELETE from products WHERE id = $1", [id])
    return result.rows[0]
}

export { createProduct, 
    getAllProducts, 
    getSpecificProduct, 
    updateProduct, 
    deleteProduct 
};