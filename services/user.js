const getAllUsers = (res) => {
  console.log('get All users called');
  configurationSettings.responseUtils.responseHandler(res, {}, 'fetched', null, 200);
};

module.exports.getAllUsers = getAllUsers;  
