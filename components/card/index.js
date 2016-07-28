var ngxCardComponent = require('./card.component.js');
var ngxCardHeaderComponent = require('./card-header.component.js');

module.exports = {
  cardComponent: ngxCardComponent,
  cardHeaderComponent: ngxCardHeaderComponent,
  CARD_DIRECTIVES: [
    ngxCardComponent,
    ngxCardHeaderComponent
  ]
};