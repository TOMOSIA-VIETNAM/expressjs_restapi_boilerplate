import { Router, Response, Request } from 'express';
import swaggerUi from "swagger-ui-express";
import { NotFoundError } from "../errors/applicationError";

import v1 from './v1';

const router = Router();

router.use(`/v1`, v1);

// Api docs
router.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "../../docs/swagger.json",
    },
  })
);

router.get('*', (req: Request, res: Response) => {
  const notFoundError = new NotFoundError();
  return res.error(notFoundError);
});
export default router;
