import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DashboardService } from "../services/dashboard.service";


const prisma = new PrismaClient();

export class DashboardController {
  private dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  getDashboardMatrics = async (req: Request, res: Response): Promise<void> => {
    try{
      const metrics = await this.dashboardService.getDashboardMetrics();
      res.status(200).json(metrics);
    }catch(error){
      res.status(500).json({message: "Error retrieving dashboard metrics"});
    }
  };
};