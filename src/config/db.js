import dotenv from "dotenv"
import { Pool } from "pg"

dotenv.config()

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

pool.connect()
    .then(() => console.log("✅Database connection established for PostgreSQL"))
    .catch(() => console.log("❌PostgreSQL connection failed!!"))

export {pool}