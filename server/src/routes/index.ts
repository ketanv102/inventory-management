import { Router } from "express";
import dashboardRoutes from "./dashboardRoutes";
import productRoutes from "./productRoutes";
import userRoutes from "./userRoutes";
import expenseRouter from "./expenseRoutes";

const router = Router();

router.use("/dashboard", dashboardRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/expenses", expenseRouter);

export default router;