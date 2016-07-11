var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.button = {
  DIRECTIVES: [
    require('./button.component.js')
  ],
  SERVICE: require('./services/button.service.js')
};

module.exports = ngxBootstrap;