var ngxBootstrap = require('ngxBootstrap');
var labelComponent = require('./label.component.js');

ngxBootstrap.label = {
  LABEL_COMPONENT: labelComponent,
  DIRECTIVES: [ labelComponent ]
};

 module.exports = ngxBootstrap;