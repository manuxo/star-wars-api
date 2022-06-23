const Joi = require('joi');

const peopleSchema = Joi.object({
    nombre: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el nombre',
            'string.base': 'Debe ingresar el nombre como string. Ejemplo: "Anakin"'
        }),
    estatura: Joi.number()
        .integer()
        .required()
        .messages({
            'any.required': 'Debe ingresar la estatura',
            'number.base': 'Debe ingresar una estatura con valores enteros. Ejemplo: 172'
        }),
    peso: Joi.number()
        .integer()
        .required()
        .messages({
            'any.required': 'Debe ingresar la estatura',
            'number.base': 'Debe ingresar una estatura con valores enteros. Ejemplo: 172'
        }),
    color_cabello: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el color de cabello',
            'string.base': 'Debe ingresar el color de cabello como string. Ejemplo: "blond"'
        }),
    color_ojos: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar un color de ojos',
            'string.base': 'Debe ingresar un color de ojos como string. Ejemplo: "blue"'
        }),
    genero: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar un genero',
            'string.base': 'Debe ingresar un genero como string. Ejemplo: "male"'
        }),
    anio_nacimiento: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar un año de nacimiento',
            'string.base': 'Debe ingresar un año de nacimiento como string. Ejemplo: "19BBY"'
        })
});

module.exports = peopleSchema;