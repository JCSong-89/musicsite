import { Router } from 'express';
import updateMusic from '../../servies/music/updateMusic';

const router = Router();
// For Update Music Data
router.post('/:musicId', updateMusic);

export default router;