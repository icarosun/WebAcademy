import Joi from "joi";

export const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(), 
});

export const signSchema = Joi.object().keys({
  nome: Joi.string().min(3).max(50).required(), 
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required()
});
