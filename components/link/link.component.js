var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxLinkComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxLinkComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);

      if (elementRef) {
        this.clickEmitter = new ngCore.EventEmitter();
      }
    }
  ];

  this.ngOnChanges = function(changeRecord){
    this.isDisabled = this.propertyHasValue(this.getStyleProperties().STATE, 'disabled');

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.initDefaultValues = function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if(ngxUtil.isEmpty(this.color)){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    if(ngxUtil.isEmpty(this.state) && ngxUtil.isNull(this.isDisabled)){ this.isDisabled = false; }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-link';
  };

  this.click = function (event) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'a[ngx-link]',
  template: require('./themes/' + __THEME__ + '/templates/link.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/link.scss')],
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxLinkComponent());