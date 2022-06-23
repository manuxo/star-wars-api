"use strict";
const { PeopleSaveDTO } = require('../dtos/PeopleSaveDTO');
const peopleService = require('../services/PeopleService');
const { ValidationError } = require('joi');

module.exports.list = async (event) => {
  try {
    const result = await peopleService.getAll();
    const response = {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
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
  try {
    const { body, headers } = event;
    const jsonData = JSON.parse(body);
    const dto = new PeopleSaveDTO(jsonData);
    const result = await peopleService.save(dto);
    const response = {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          message: "Personaje registrado satisfactoriamente",
          result
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

function errorHandler(error) {
  console.error(error);
  let message = "";
  if (error.isJoi) {
    console.log("Joi error => ", error)
    for (const d in error.details) {
      message += `${d.message}\n`;
    }
  } else {
    message = error.message;
  }
  const response = {
    statusCode: 400,
    headers: { "Content-Type": "application/json" },
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