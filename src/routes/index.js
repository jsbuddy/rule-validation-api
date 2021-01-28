import { Router } from 'express';
import * as controllers from '../controllers/index';

const router = Router();

router.get('/', controllers.welcome);

export default router;
