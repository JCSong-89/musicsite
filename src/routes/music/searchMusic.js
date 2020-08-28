import { Router } from 'express';
import search from '../../servies/music/searchMusic';

const router = Router();

router.get('/', search);

export default router;