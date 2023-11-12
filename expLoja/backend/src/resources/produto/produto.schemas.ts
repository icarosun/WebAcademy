import Joi from "joi";

export const produtoSchema = Joi.object().keys({
  nome: Joi.string().min(3).max(50).required(),
  preco: Joi.number().required(),
  estoque: Joi.number().integer().required(),
});
