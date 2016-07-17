var ngx = require('ngx');
var ngxCardComponent = require('./card.component.js');
var ngxCardHeaderComponent = require('./card-header.component.js');

ngx.card = {
  cardComponent: ngxCardComponent,
  cardHeaderComponent: ngxCardHeaderComponent,
  DIRECTIVES: [
    ngxCardComponent,
    ngxCardHeaderComponent
  ]
};

module.exports = ngx;