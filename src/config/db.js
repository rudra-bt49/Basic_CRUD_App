import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix: Load .env from project root (two levels up)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"),
});

import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.connect()
  .then(() => console.log("✅ Database connection established for PostgreSQL"))
  .catch((err) => console.log("❌ PostgreSQL connection failed!!", err.message));

export { pool };
