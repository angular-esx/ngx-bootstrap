var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.grid = {
  DIRECTIVES: [
    require('./grid.component.js'),
    require('./grid-row.directive.js'),
    require('./grid-column.directive.js')
  ],
  SERVICE: require('./services/grid.service.js')
};

module.exports = ngxBootstrap;