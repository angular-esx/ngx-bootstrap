var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.navbar = {
  DIRECTIVES: [
    require('./navbar.component.js'),
    require('./navbar-brand.directive.js'),
    require('./navbar-divider.directive.js'),
    require('./navbar-item.directive.js')
  ],
  SERVICE: require('./services/navbar.service.js')
};

module.exports = ngxBootstrap;