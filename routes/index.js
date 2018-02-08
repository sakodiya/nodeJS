const routingFiles = ['user', 'post', 'comment'];

routingFiles.forEach((routeFile) => {
  const routePath = require('./' + routeFile + '.js');
  routePath.route(router); 
});
