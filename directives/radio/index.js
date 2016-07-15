var ngxBootstrap = require('ngxBootstrap');
var ngxRadioDirective = require('./radio.directive.js');
var ngxRadioGroupDirective = require('./radio-group.directive.js');

ngxBootstrap.radio = {
  RADIO_DIRECTIVE: ngxRadioDirective,
  RADIO_GROUP_DIRECTIVE: ngxRadioGroupDirective,
  DIRECTIVES: [ 
    ngxRadioDirective, 
    ngxRadioGroupDirective 
  ]
};

module.exports = ngxBootstrap;