var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.progress = {
  DIRECTIVES: [
    require('./progress.component.js')
  ],
  SERVICE: require('./services/progress.service.js')
};

module.exports = ngxBootstrap;