var ngxBootstrap = require('ngxBootstrap');
var ngxCardComponent = require('./card.component.js');
var ngxCardHeaderComponent = require('./card-header.component.js');

ngxBootstrap.card = {
  CARD_COMPONENT: ngxCardComponent,
  CARD_HEADER_COMPONENT: ngxCardHeaderComponent,
  DIRECTIVES: [
    ngxCardComponent,
    ngxCardHeaderComponent
  ]
};

module.exports = ngxBootstrap;