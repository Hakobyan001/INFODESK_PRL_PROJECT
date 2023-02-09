// NPM Modules
import express from 'express';

// Local Modules
import { TimeStampController } from '../controller';
import { TimeStampValidationMiddleware } from '../middlewares/validation';
import AuthMiddleware from '../auth/auth.middlware';

const router = express.Router();

// Քաղաքացիների ընդունելության և փաստաթղթաշրջանառության կարգը

router.get('/',
  TimeStampController.getTime);

router.post('/',
  AuthMiddleware.authenticateFor(['admin']),
  TimeStampValidationMiddleware.validateAddArgs,
  TimeStampController.addTime);

export default router;
