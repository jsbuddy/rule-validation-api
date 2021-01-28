import { Router } from 'express';
import * as controllers from '../controllers/index';
import validateRule from '../validators/validateRule';

const router = Router();

router.get('/', controllers.welcome);
router.post('/validate-rule', validateRule, controllers.validateRule);

export default router;
