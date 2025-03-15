import { PrismaClient } from "@prisma/client";
import { IExpenseSummary } from "../interfaces";

const prisma = new PrismaClient();

export class ExpenseSummeryRepository {
  async getExpenseSummery(): Promise<IExpenseSummary[]> {
    const expenseSummery = await prisma.expenseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc"
      }
    });

    return expenseSummery;
  }
}