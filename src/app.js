    import express from "express";
    import cors from "cors";
    import productRoutes from "./routes/product.route.js";

    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use("/api/products", productRoutes);

    export default app;
