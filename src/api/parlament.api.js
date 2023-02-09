// NPM Modules
import express from 'express';

// Local Modules
import { ParlamentController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { ParlamentValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Պատգամավորների աշխատանքային հեռախոսահամարները

router.get('/',
  ParlamentController.getUsers);

router.post('/',
  AuthMiddleware.authenticateFor(['admin']),
  ParlamentValidationMiddleware.validateAddArgs,
  ParlamentController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin']),
  ParlamentValidationMiddleware.validateEditArgs,
  ParlamentController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin']),
  ParlamentValidationMiddleware.validateGetByIdArgs,
  ParlamentController.delete);

export default router;
