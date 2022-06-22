"use strict";
const peopleService = require('../services/PeopleService');

module.exports.list = async (event) => {
  try {
    const result = await peopleService.getAll();
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Personajes obtenidos satisfactoriamente",
          result,
        },
        null,
        2
      ),
    };
    return response;
  } catch (error) {
    return errorHandler(error);
  }
};

module.exports.create = async (event) => {
  const response = {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "Personaje registrado satisfactoriamente",
        result,
      },
      null,
      2
    ),
  };
  return response;
};

function errorHandler(error) {
  console.error(error);
  const response = {
    statusCode: 400,
    body: JSON.stringify({
      message: error.message,
      success: false,
      result: null
    },
      null,
      2)
  };
  return response;
};