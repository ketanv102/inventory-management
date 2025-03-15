import {Router} from 'express';
import {ProductController } from "../controllers/productController";

const router = Router();
const productController = new ProductController();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);


export default router;