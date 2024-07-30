import cors from "cors";
import express from "express";
import { config } from "dotenv";

import connectDB from "./db.js";

import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
config();

const PORT = process.env.PORT || 5000;

await connectDB();

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
