var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap['drop-menu'] = {
  DIRECTIVES: [
    require('./drop-menu.component.js'),
    require('./drop-menu-item.directive.js'),
    require('./toggle-dropdown.directive.js'),
    require('./toggle-dropup.directive.js')
  ],
  SERVICE: require('./services/drop-menu.service.js'),
  ITEM_SERVICE: require('./services/drop-menu-item.service.js'),
};

module.exports = ngxBootstrap;