
import { IExpenseByCategory } from "../interfaces";
import { ExpenseByCategoryRepository } from "../repository/expenseByCategory.repository";


export class ExpenseService{
  private expenseRepository: ExpenseByCategoryRepository;

  constructor(){
    this.expenseRepository = new ExpenseByCategoryRepository();
  }

  getExpensesByCategory = async():Promise<IExpenseByCategory[]> => {
    try{
      const expensesByCategorySummeryRaw = await this.expenseRepository.getExpensesByCategory();

      const expensesByCategorySummery = expensesByCategorySummeryRaw.map(
        (item) => ({
          ...item,
          amount: item.amount.toString()
        })
      );

      return expensesByCategorySummery;
      
    }catch(error){
      console.error(error);
      throw new Error(`Error while fetching expenses by category: ${error}`);
    }
  }
}