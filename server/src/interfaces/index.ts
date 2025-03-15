// src/api/interfaces/index.ts

export interface IUser {
  userId: string;
  name: string;
  email: string;
}

export interface IProduct {
  productId: string;
  name: string;
  price: number;
  rating?: number | null;
  stockQuantity: number;
}

export interface ISale {
  saleId: string;
  productId: string;
  timestamp: Date;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
}

export interface IPurchase {
  purchaseId: string;
  productId: string;
  timestamp: Date;
  quantity: number;
  unitCost: number;
  totalCost: number;
}

export interface IExpense {
  expenseId: string;
  category: string;
  amount: number;
  timestamp: Date;
}

export interface ISalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number | null;
  date: Date;
}

export interface IPurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number | null;
  date: Date;
}

export interface IExpenseSummary {
  expenseSummaryId: string;
  totalExpenses: number;
  date: Date;
}

export interface IExpenseByCategory {
  expenseByCategoryId: string;
  expenseSummaryId: string;
  category: string;
  amount: string;
  date: Date;
}

export interface IDashboardMetrics {
  popularProducts: IProduct[];
  salesSummary: ISalesSummary[];
  purchaseSummary: IPurchaseSummary[];
  expenseSummary: IExpenseSummary[];
  expenseByCategorySummary: IExpenseByCategory[];
}