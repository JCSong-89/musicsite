import { Router } from 'express';
import updateMusic from '../../servies/music/updateMusic';
import detailMusic from '../../servies/music/detailMusic';

const router = Router();

router.post('/', updateMusic);
router.get('/', detailMusic);

export default router;