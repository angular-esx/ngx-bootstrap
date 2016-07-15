function _ngxRadioGroupDirective() {
  this.constructor = [
    ng.core.ElementRef,

    function ngxRadioGroupDirective(elementRef) {
      this.elementRef = elementRef;

      if (elementRef) {
        this.changedModelEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.change = function (value) {
    this.model = value;
    this.changedModelEmitter.emit(value);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-radio-group]',
  properties: ['id: ngx-radio-group', 'model:ngx-radio-group-model'],
  events: ['changedModelEmitter:ngx-radio-group-onChangedModel']
})
.Class(new _ngxRadioGroupDirective());