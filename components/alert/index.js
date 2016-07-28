var ngxAlertComponent = require('./alert.component.js');
var ngxAlertLinkDirective = require('./alert-link.directive.js');
var ngxAlertService = require('./services/alert.service.js');

module.exports = {
  alertComponent: ngxAlertComponent,
  alertLinkDirective: ngxAlertLinkDirective,
  alertService: ngxAlertService,
  ALERT_DIRECTIVES: [ngxAlertComponent, ngxAlertLinkDirective],
  ALERT_PROVIDERS: [ngxAlertService]
};