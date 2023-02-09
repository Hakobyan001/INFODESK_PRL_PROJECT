// NPM Modules
import express from 'express';

// Local Modules
import { SecondAcceptabilityController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { AcceptabilityValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Քաղաքացիների ընդունելության ժամանակացույց 2

router.get('/',
  SecondAcceptabilityController.getAcceptability);

router.post('/add',
  AuthMiddleware.authenticateFor(['admin']),
  AcceptabilityValidationMiddleware.validateAddArgs,
  SecondAcceptabilityController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin']),
  AcceptabilityValidationMiddleware.validateEditArgs,
  SecondAcceptabilityController.edit);

router.delete('/delete/:id',
  AuthMiddleware.authenticateFor(['admin']),
  AcceptabilityValidationMiddleware.validateGetByIdArgs,
  SecondAcceptabilityController.delete);

export default router;
