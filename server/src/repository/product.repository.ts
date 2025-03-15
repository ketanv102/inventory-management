// src/api/repositories/product.repository.ts

import { PrismaClient } from "@prisma/client";
import { IProduct } from "../interfaces";

const prisma = new PrismaClient();

export class ProductRepository {
  
  async getPopularProducts(): Promise<IProduct[]> {
    return await prisma.products.findMany({
      take: 5,
      orderBy: { stockQuantity: "desc" },
    });
  }

  async findSearchProducts(search: string):Promise<IProduct[]>{
    return await prisma.products.findMany({
      where:{
        name:{
          contains: search,
        }
      }
    })
  }

  async create(payload: IProduct):Promise<IProduct>{
    try{
      const {productId, name, price, rating, stockQuantity} = payload;
      const product = await prisma.products.create({
        data: {
          productId,
          name,
          price,
          rating,
          stockQuantity
        },
      });
      return product;
      
    } catch (error) {
      console.error("Error", error);
      throw new Error(`Error creating product: ${error}`)
    }
  }

}