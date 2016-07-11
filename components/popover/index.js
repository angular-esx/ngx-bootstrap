var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.popover = {
  DIRECTIVES: [
    require('./popover.component.js'),
    require('./popover.directive.js'),
    require('./popover-template.directive.js')
  ],
  SERVICE: require('./services/popover.service.js')
};

module.exports = ngxBootstrap;