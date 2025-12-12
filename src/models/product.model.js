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

export { createProduct, getAllProducts, getSpecificProduct };