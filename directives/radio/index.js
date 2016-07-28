var ngxRadioDirective = require('./radio.directive.js');
var ngxRadioGroupDirective = require('./radio-group.directive.js');

module.exports = {
  radioDirective: ngxRadioDirective,
  radioGroupDirective: ngxRadioGroupDirective,
  RADIO_DIRECTIVES: [
    ngxRadioDirective,
    ngxRadioGroupDirective
  ]
};