import { Router } from 'express';

import readProfile from '../../servies/account/readProfile';
import updateProfile from '../../servies/account/updateProfile';

const router = Router();

router.get('/', readProfile);
router.post('/', updateProfile);

export default router;