var ngxRadioDirective = require('./radio.directive.js');
var ngxRadioGroupDirective = require('./radio-group.directive.js');

module.exports  = {
  RADIO_DIRECTIVE: ngxRadioDirective,
  RADIO_GROUP_DIRECTIVE: ngxRadioGroupDirective,
  DIRECTIVES: [ 
    ngxRadioDirective, 
    ngxRadioGroupDirective 
  ]
};