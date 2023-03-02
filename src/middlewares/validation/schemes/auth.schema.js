// NPM modules
import Joi from 'joi';

const AuthSchema = {
  loginSchema: {
    body: Joi.object({
      user: Joi.string().min(3).required(),
      pwd: Joi.string().min(3).required()
    })
  }
};

export default AuthSchema;
