var ngxRadioGroupService = require('./services/radio-group.service.js');
var ngxBootstrap = require('utils');

function _ngxRadioGroupDirective() {
  this.constructor = [
    ng.core.ElementRef,
    ngxRadioGroupService,

    function ngxRadioGroupDirective(elementRef, ngxRadioGroupService) {
      if (elementRef) {
        this.elementRef = elementRef;

        this.ngxRadioGroupService = ngxRadioGroupService;

        this.modelChange = new ng.core.EventEmitter();
      }
    }
  ];

  this.change = function (value) {
    this.model = value;
    this.modelChange.emit(value);

    this.ngxRadioGroupService.change(this.id);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-radio-group]',
  properties: ['id: ngx-checkbox-group', 'model'],
  events: ['modelChange']
})
.Class(new _ngxRadioGroupDirective());