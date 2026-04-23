import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import { authMiddleware } from "./middleware/auth.middleware";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/me", authMiddleware, (req, res) => {
  res.json({ user: (req as any).user });
});

app.get("/", (req, res) => {
  res.send("E-Commerce API is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});