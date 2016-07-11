var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.card = {
  DIRECTIVES: [
    require('./card.component.js'),
    require('./card-header.component.js')
  ]
};

module.exports = ngxBootstrap;