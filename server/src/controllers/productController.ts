import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ProductService } from "../services/productService";


const prisma = new PrismaClient();

export class ProductController {
  private productService : ProductService;

  constructor(){
    this.productService = new ProductService();
  }

  getProducts = async (req: Request, res: Response) => {
    try{
      const search = req.query.search?.toString() || "";
      const products = await this.productService.getProducts(search)
      res.status(200).json(products);
    } catch(error){
      res.status(500).json({message: "Error retrieving products"})
    }
  } 
  
  createProduct = async(req: Request, res:Response) => {
    try{
      const product = await this.productService.createProduct(req.body);
      res.status(201).json({message: product})
    }catch(error){
      res.status(500).json({message: "Error creating product"})
    }
  }

}
