import { PrismaClient } from "@prisma/client";
import { IPurchaseSummary } from "../interfaces";

const prisma = new PrismaClient();

export class PurchaseSummaryRepository {
  async getPurchaseSummery(): Promise<IPurchaseSummary[]> {
    const purchaseSummary = await prisma.purchaseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    return purchaseSummary;
  }
}