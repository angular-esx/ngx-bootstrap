var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.collapse = {
  DIRECTIVES: [
    require('./collapse.component.js'),
    require('./toggle-collapse.directive.js')
  ],
  SERVICE: require('./services/collapse.service.js')
};

module.exports = ngxBootstrap;