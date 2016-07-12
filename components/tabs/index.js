var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.tabs = {
  DIRECTIVES: [
    require('./tabs.component.js'),
    require('./tab.directive.js'),
    require('./tab-head.directive.js'),
    require('./tab-content.directive.js')
  ],
  SERVICE: require('./services/tabs.service.js')
};

module.exports = ngxBootstrap;