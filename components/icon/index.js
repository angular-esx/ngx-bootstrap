var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.icon = {
  DIRECTIVES: [
    require('./icon.component.js')
  ],
  SERVICE: require('./services/icon.service.js')
};

module.exports = ngxBootstrap;