var ngx = require('ngx');
var ngxIconComponent = require('./icon.component.js');
var ngxIconService = require('./services/icon.service.js');

ngx.icon = {
  iconComponent: ngxIconComponent,
  iconService: ngxIconService,
  DIRECTIVES: [ ngxIconComponent ],
  PROVIDERS: [ ngxIconService ]
};

module.exports = ngx;