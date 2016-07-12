var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.label = {
  DIRECTIVES: [
    require('./label.component.js')
  ],
  SERVICE: require('./services/label.service.js')
};

module.exports = ngxBootstrap;