import { Router } from 'express';
import uploadMusic from '../../servies/music/uploadMusic';
import {multerMusic} from '../../middleware/uploadS3';
import checkUser from '../../servies/music/checkingUser';
import changeFile from '../../servies/music/changeFile';

const router = Router();
// For Create File
router.post('/:username/:userId', multerMusic.single('music'), uploadMusic);
// For Check User Access before Create or Update
router.post('/', checkUser);
// For Change File 
router.post('/:musicId', multerMusic.single('music'), changeFile);

export default router;