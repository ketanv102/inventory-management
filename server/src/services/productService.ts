import { IProduct } from "../interfaces";
import { ProductRepository } from "../repository/product.repository";



export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  getProducts = async(search: string) => {
    try{
      const products = await this.productRepository.findSearchProducts(search);
      return products;
    }catch(error){
      // throw error
      console.error(error);
      throw new Error(`Error while fetching products: ${error}`); 
    }
  };

  createProduct = async(payload: IProduct):Promise<IProduct> => {
    try{
      const product = await this.productRepository.create(payload)
      return product;
    }catch(error){
      // throw error
      console.error(error);
      throw new Error(`Error while creating product: ${error}`);
    }
  }


}