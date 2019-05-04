import * as Joi from 'joi';

export const ProductosSchema = Joi.object().allow(null).keys({
    id: Joi.number(),
    descripcion: Joi.string().required(),
    precio: Joi.number().required(),
    costo: Joi.number().required(),
    unidad: Joi.string(),
    stock_minimo: Joi.number().min(0),
    stock_actual: Joi.number().min(0),
});
