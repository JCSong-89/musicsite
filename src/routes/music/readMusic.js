import { Router } from 'express';
import detailMusic from '../../servies/music/detailMusic';

const router = Router();

router.get('/:musicId', detailMusic);

export default router;