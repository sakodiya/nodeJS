const routingFiles = ['user', 'post'];

routingFiles.forEach((routeFile) => {
  const routePath = require('./' + routeFile + '.js');
  routePath.route(router); 
});
