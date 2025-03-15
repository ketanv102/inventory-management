import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UserService } from "../services/userService";

const prisma = new PrismaClient();

export class UserController {
  private userService : UserService;

  constructor(){
    this.userService = new UserService();
  }

  getUsers = async(req: Request, res: Response) => {
    try{
      debugger;
      const users = await this.userService.getUsers();
      res.status(200).json(users);
    }catch(error){
      res.status(500).json({message: "Error retrieving products"});
    }
  }

}