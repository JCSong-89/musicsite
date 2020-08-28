import { Router } from 'express';
import uploadMusic from '../../servies/music/uploadMusic';
import {multerMusic} from '../../middleware/uploadS3';
import checkUser from '../../servies/music/checkingUser';

const router = Router();

router.post('/:username/:userId', multerMusic.single('music'), uploadMusic);
router.get('/', checkUser);
export default router;