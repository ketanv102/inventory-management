import { PrismaClient } from "@prisma/client";
import { IExpenseByCategory } from "../interfaces";

const prisma = new PrismaClient();

export class ExpenseByCategoryRepository {
  async getExpenseByCategorySummaries(): Promise<IExpenseByCategory[]> {
    const results = await prisma.expenseByCategory.findMany({
      take: 5,
      orderBy: { date: "desc" },
    });

    return results.map(result => ({
      ...result,
      amount: result.amount.toString(),
    }));
  }

  async getExpensesByCategory() {
    const result = await prisma.expenseByCategory.findMany({
      orderBy:{
        date: "desc",
      },
    });

    return result;
  }
}