import { Router } from 'express';
import uploadMusic from '../../servies/music/uploadMusic';


const router = Router();

router.post('/', uploadMusic);

export default router;