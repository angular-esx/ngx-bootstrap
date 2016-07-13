var ngxBootstrap = require('ngxBootstrap');
var ngxAlertComponent = require('./alert.component.js');
var ngxAlertLinkDirective = require('./alert-link.directive.js');
var ngxAlertService = require('./services/alert.service.js');

ngxBootstrap.alert = {
  ALERT_COMPONENT: ngxAlertComponent,
  ALERT_LINK_DIRECTIVE: ngxAlertLinkDirective,
  ALERT_SERVICE: ngxAlertService,
  DIRECTIVES: [ ngxAlertComponent, ngxAlertLinkDirective ],
  SERVICES: [ ngxAlertService ]
};

module.exports = ngxBootstrap;