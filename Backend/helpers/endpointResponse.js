/**
 * Return a format response for the endpoint
 * 
 * @param {Object} endpointResponse - Object with the properties of the request
 * @param {Object} endpointResponse.res - res property directly from the http request
 * @param {Number} endpointResponse.code - status code from the http request, defeault value 200
 * @param {String} endpointResponse.message - message info about the response
 * @param {Object} endpointResponse.body - info/properties from the request
 * 
 * @example 
 * endPointResponse({
 *  res,
 *  code: 201, 
 *  message: "User created"
 *  body: {
 *    user,
 *    token
 *  }
 * })
 */

const endpointResponse = ({ res, code = 200, message, body }) => {
  res.status(code).json({ code, message, body });
};

module.exports = endpointResponse;