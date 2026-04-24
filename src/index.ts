import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";

dotenv.config();

const app = express();

app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// health check
app.get("/", (_req, res) => {
  res.send("E-Commerce API is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});