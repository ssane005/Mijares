import { Router } from 'express';
import { createOrder, getOrders, getOrder } from '../controllers/orders.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrder);

export default router;
