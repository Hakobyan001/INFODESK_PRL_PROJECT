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
      name: Joi.string().min(3).max(9585),
      member1: Joi.string().max(855),
      member2: Joi.string().max(555),
      cityphone: Joi.string(),
      internalphone: Joi.string()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      name: Joi.string().min(3).max(9555),
      member1: Joi.string().max(555),
      member2: Joi.string().max(555),
      cityphone: Joi.string(),
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
