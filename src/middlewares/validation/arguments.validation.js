import { ArgSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class ArgumentsValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ArgSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ArgSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ArgSchema.editSchema, next);
  }
}

export default ArgumentsValidation;
