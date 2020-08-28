import { Router } from 'express';
import login from '../../servies/account/login';

const router = Router();

router.post('/', login);

export default router;