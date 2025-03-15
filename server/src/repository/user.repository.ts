import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces";


const prisma = new PrismaClient();

export class UserRepository{
  
  async getUsers():Promise<IUser[]>{
    try{
      const users = await prisma.users.findMany();
      return users;
    } catch(err){
      console.log(err);
      throw new Error
    }
  }
}