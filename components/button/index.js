var ngxBootstrap = require('ngxBootstrap');
var ngxButtonComponent = require('./button.component.js');

ngxBootstrap.button = {
  BUTTON_COMPONENT: ngxButtonComponent,
  DIRECTIVES: [ ngxButtonComponent ]
};

module.exports = ngxBootstrap;