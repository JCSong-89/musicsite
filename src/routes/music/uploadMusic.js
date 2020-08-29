import { Router } from 'express';

import changeFile from '../../servies/music/changeFile';
import checkUser from '../../servies/music/checkingUser';
import uploadMusic from '../../servies/music/uploadMusic';
import {MULTER_MUSIC} from '../../middleware/uploadS3';

const router = Router();
// For Create File
router.post('/:username/:userId', MULTER_MUSIC.single('music'), uploadMusic);
// For Check User Access before Create or Update
router.post('/', checkUser);
// For Change File 
router.post('/:musicId', MULTER_MUSIC.single('music'), changeFile);

export default router;