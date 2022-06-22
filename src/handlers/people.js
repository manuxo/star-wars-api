"use strict";

module.exports.list = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "People retrieved successfully",
        event,
      },
      null,
      2
    ),
  };
};

module.exports.create = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "People saved successfully",
        event,
      },
      null,
      2
    ),
  };
}
