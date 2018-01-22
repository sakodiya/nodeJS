const responseHandler = (res, responseObject, message, error, status) => {
  res.status(status).send({
    'error': error,
    'message': message,
    'response': responseObject
  })
  res.end()
}

module.exports.responseHandler = responseHandler;
