var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.breadcrumb = {
  DIRECTIVES: [
    require('./breadcrumb.component.js'),
    require('./breadcrumb-item.directive.js')
  ],
  SERVICE: require('./services/breadcrumb.service.js')
};

module.exports = ngxBootstrap;