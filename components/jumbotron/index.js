var ngxBootstrap = require('ngxBootstrap');
var ngxJumbotronComponent = require('./jumbotron.component.js');

ngxBootstrap.jumbotron = {
  JUMBOTRON_COMPONENT: ngxJumbotronComponent,
  DIRECTIVES: [ ngxJumbotronComponent ]
};

module.exports = ngxBootstrap;