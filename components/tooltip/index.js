var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.tooltip = {
  DIRECTIVES: [
    require('./tooltip.component.js'),
    require('./tooltip.directive.js'),
    require('./tooltip-template.directive.js')
  ],
  SERVICE: require('./services/tooltip.service.js')
};

module.exports = ngxBootstrap;