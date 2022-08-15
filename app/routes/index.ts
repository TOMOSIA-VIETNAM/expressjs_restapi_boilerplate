import { Router, Response, Request } from 'express';
import { NotFoundError } from "../errors/applicationError";

import v1 from './v1';

const router = Router();

router.use(`/v1`, v1);

router.get('*', (req: Request, res: Response) => {
  const notFoundError = new NotFoundError();
  return res.error(notFoundError);
});
export default router;
