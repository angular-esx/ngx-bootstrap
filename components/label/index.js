var ngxBootstrap = require('ngxBootstrap');
var ngxLabelComponent = require('./label.component.js');

ngxBootstrap.label = {
  LABEL_COMPONENT: ngxLabelComponent,
  DIRECTIVES: [ ngxLabelComponent ]
};

 module.exports = ngxBootstrap;