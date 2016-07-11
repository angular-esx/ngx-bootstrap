var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.pager = {
  DIRECTIVES: [
    require('./pager.component.js')
  ],
  SERVICE: require('./services/pager.service.js')
};

module.exports = ngxBootstrap;