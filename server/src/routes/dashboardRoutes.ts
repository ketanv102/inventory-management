import {Router} from 'express';
import { DashboardController } from "../controllers/dashboardController";

const router = Router();
const dashboardController = new DashboardController();

router.get('/', dashboardController.getDashboardMatrics);

export default router;