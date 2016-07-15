var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.checkbox = {
  DIRECTIVES: [
    require('./checkbox.directive.js'),
    require('./checkbox-group.directive.js')
  ],
  SERVICE: require('./services/checkbox.service.js')
};

module.exports = ngxBootstrap;