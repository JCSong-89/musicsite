import { Router } from 'express';
import uploadMusic from '../../servies/music/uploadMusic';
import {uploadeFile} from '../../middleware/uploadS3';

const router = Router();

router.post('/', uploadeFile, uploadMusic);

export default router;