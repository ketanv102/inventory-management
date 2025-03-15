import { PrismaClient } from "@prisma/client";
import { ISalesSummary } from "../interfaces";

const prisma = new PrismaClient();

export class SalesSummaryRepository {

  async getSalesSummery(): Promise<ISalesSummary[]> {
    const salesSummery = await prisma.salesSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc"
      }
    });
    return salesSummery;
  }

}