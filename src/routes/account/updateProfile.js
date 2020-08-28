import { Router } from 'express';
import updateProfile from '../../servies/account/updateProfile';
import readProfile from '../../servies/account/readProfile';

const router = Router();

router.get('/', readProfile);
router.post('/', updateProfile);

export default router;