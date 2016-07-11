var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.pagination = {
  DIRECTIVES: [
    require('./pagination.component.js')
  ],
  SERVICE: require('./services/pagination.service.js')
};

module.exports = ngxBootstrap;