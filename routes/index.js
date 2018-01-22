const routingFiles = ['user'];

routingFiles.forEach((routeFile) => {
  const routePath = require('./' + routeFile + '.js');
  routePath.route(router); 
});
