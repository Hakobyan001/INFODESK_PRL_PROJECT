// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';

const FactionSchema = {

  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      name: Joi.string(),
      member1: Joi.string(),
      member2: Joi.string(),
      cityphone: Joi.string().min(0),
      internalphone: Joi.string()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      name: Joi.string(),
      member1: Joi.string(),
      member2: Joi.string(),
      cityphone: Joi.string().min(0),
      internalphone: Joi.string()
    }).or(
      'name',
      'mamber1',
      'mamber2',
      'cityphone',
      'internalPhone'
    )
  }
};

export default FactionSchema;
