const responseHandler = require('../application-utilities/response-handler.js');

global.configurationSettings = {};
configurationSettings.responseUtils = responseHandler;

module.exports.configurationSettings = configurationSettings;
