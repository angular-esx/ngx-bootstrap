var ngxBootstrap = require('ngxBootstrap');
var alertComponent = require('./alert.component.js');
var alertLinkDirective = require('./alert-link.directive.js');
var alertService = require('./services/alert.service.js');

ngxBootstrap.alert = {
  ALERT_COMPONENT: alertComponent,
  ALERT_LINK_DIRECTIVE: alertLinkDirective,
  ALERT_SERVICE: alertService,
  DIRECTIVES: [ alertComponent, alertLinkDirective ],
  SERVICES: [ alertService ]
};

module.exports = ngxBootstrap;