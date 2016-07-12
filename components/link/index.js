var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.link = {
  DIRECTIVES: [
    require('./link.component.js')
  ],
  SERVICE: require('./services/link.service.js')
};

module.exports = ngxBootstrap;