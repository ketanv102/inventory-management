import { Router } from "express";
import { ExpenseController } from "../controllers/expenseController";

const router = Router();

const expenseController = new ExpenseController();

router.get('/', expenseController.getExpensesByCategory);

export default router;