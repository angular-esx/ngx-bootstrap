var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.list = {
  DIRECTIVES: [
    require('./list.component.js'),
    require('./list-item.component.js')
  ],
  SERVICES: [require('./services/list-item.service.js')],
  ITEM_SERVICE: require('./services/list-item.service.js')
};

module.exports = ngxBootstrap;