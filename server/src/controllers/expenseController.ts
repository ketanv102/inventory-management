import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { ExpenseService } from "../services/expenses.service";

const prisma = new PrismaClient();

export class ExpenseController {
  private expenseService: ExpenseService;

  constructor(){
    this.expenseService = new ExpenseService();
  }

  getExpensesByCategory = async(req: Request, res: Response) =>{
    try{
      const expensesByCategorySummery = await this.expenseService.getExpensesByCategory();
      res.json(expensesByCategorySummery);
    }catch(error){
      res.status(500).json({message: "Error retrieving expenses by category"});
      throw new Error(`Error retrieving expenses by category ${error}`)
    }
  }
}