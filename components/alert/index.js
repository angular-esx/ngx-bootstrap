var ngx = require('ngx');
var ngxAlertComponent = require('./alert.component.js');
var ngxAlertLinkDirective = require('./alert-link.directive.js');
var ngxAlertService = require('./services/alert.service.js');

ngx.alert = {
  alertComponent: ngxAlertComponent,
  alertLinkDirective: ngxAlertLinkDirective,
  alertService: ngxAlertService,
  DIRECTIVES: [ ngxAlertComponent, ngxAlertLinkDirective ],
  PROVIDERS: [ ngxAlertService ]
};

module.exports = ngx;