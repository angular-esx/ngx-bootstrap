function _ngxRadioGroupDirective() {
  this.constructor = [
    ng.core.ElementRef,

    function ngxRadioGroupDirective(elementRef) {
      this.elementRef = elementRef;

      if (elementRef) {
        this.radioModelChange = new ng.core.EventEmitter();
      }
    }
  ];

  this.change = function (value) {
    this.model = value;
    this.radioModelChange.emit(value);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-radio-group]',
  properties: ['id: ngx-radio-group', 'model:radioModel'],
  events: ['radioModelChange']
})
.Class(new _ngxRadioGroupDirective());