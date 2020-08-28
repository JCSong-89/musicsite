import { Router } from 'express';
import register from '../../servies/account/register';

const router = Router();

router.post('/', register);

export default router;