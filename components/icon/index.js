var ngxBootstrap = require('ngxBootstrap');
var ngxIconComponent = require('./icon.component.js');
var ngxIconService = require('./services/icon.service.js');

ngxBootstrap.icon = {
  ICON_COMPONENT: ngxIconComponent,
  ICON_SERVICE: ngxIconService,
  DIRECTIVES: [ ngxIconComponent ],
  SERVICES: [ ngxIconService ]
};

module.exports = ngxBootstrap;