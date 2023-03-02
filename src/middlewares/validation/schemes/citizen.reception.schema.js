// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';

const CitizenReceptionSchema = {

  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      title: Joi.string().max(550),
      text: Joi.string().max(550),
      subtitle1: Joi.string().max(550),
      subtitle2: Joi.string().max(550)
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      title: Joi.string().max(550),
      text: Joi.string().max(550),
      subtitle1: Joi.string().max(550),
      subtitle2: Joi.string().max(550)

    }).or(
      'title',
      'text',
      'subtitle1',
      'subtitle2'
    )
  }
};

export default CitizenReceptionSchema;
