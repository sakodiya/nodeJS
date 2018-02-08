const responseHandler = require('../application-utilities/response-handler.js');
const userAuthenticationHandler = require('../application-utilities/authenticate-user.js');

global.configurationSettings = {};
configurationSettings.responseUtils = responseHandler;
configurationSettings.security = userAuthenticationHandler;

module.exports.configurationSettings = configurationSettings;
