// import { DashboardRepository } from "../repositories/DashboardRepository";
// import { IDashboardMetrics, IExpenseByCategory } from "../interfaces";

import { ProductRepository } from "../repository/product.repository";
import { SalesSummaryRepository } from "../repository/salesSummery.repository";
import { PurchaseSummaryRepository } from "../repository/purchaseSummery.repository";
import { ExpenseSummeryRepository } from "../repository/expenseSummery.repository";
import { ExpenseByCategoryRepository } from "../repository/expenseByCategory.repository";
import { IDashboardMetrics } from "../interfaces";

export class DashboardService {
  private productRepository: ProductRepository;
  private salesSummaryRepository: SalesSummaryRepository;
  private purchaseSummeryRepository: PurchaseSummaryRepository;
  private expenseSummeryRepository: ExpenseSummeryRepository;
  private expenseByCategoryRepository: ExpenseByCategoryRepository;


  constructor() {
    this.productRepository = new ProductRepository();
    this.salesSummaryRepository = new SalesSummaryRepository();
    this.purchaseSummeryRepository = new PurchaseSummaryRepository();
    this.expenseSummeryRepository = new ExpenseSummeryRepository();
    this.expenseByCategoryRepository = new ExpenseByCategoryRepository();
  }

  getDashboardMetrics = async (): Promise<IDashboardMetrics> => {
   const popularProducts = await this.productRepository.getPopularProducts();
   const salesSummary = await this.salesSummaryRepository.getSalesSummery();
    const purchaseSummary = await this.purchaseSummeryRepository.getPurchaseSummery();
    const expenseSummary = await this.expenseSummeryRepository.getExpenseSummery();
    const expenseByCategorySummary = await this.expenseByCategoryRepository.getExpenseByCategorySummaries();
    return {
      popularProducts,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategorySummary: expenseByCategorySummary.map((item) => ({
        ...item 
      })),
    };
  }

};