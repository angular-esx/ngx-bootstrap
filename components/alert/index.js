var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.alert = {
  DIRECTIVES: {
    ALERT: require('./alert.component.js'),
    ALERT_LINK: require('./alert-link.directive.js')
  },
  SERVICE: require('./services/alert.service.js')
};

module.exports = ngxBootstrap;