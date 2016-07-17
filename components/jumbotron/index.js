var ngx = require('ngx');
var ngxJumbotronComponent = require('./jumbotron.component.js');

ngx.jumbotron = {
  jumbotronComponent: ngxJumbotronComponent,
  DIRECTIVES: [ ngxJumbotronComponent ]
};

module.exports = ngx;