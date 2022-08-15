import { Router } from 'express';

import * as userController from '../../controllers/userController';

const router = Router();

router.get('/users', userController.index);

export default router;

