var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.group = {
  DIRECTIVES: [
    require('./group.component.js')
  ],
  SERVICE: require('./services/group.service.js')
};

module.exports = ngxBootstrap