var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxButtonComponent() {
  var _base;
  
  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxButtonComponent(elementRef, renderer) {
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
    if(ngxUtil.isEmpty(this.state) && ngxUtil.isNull(this.isDisabled)){ this.isDisabled = false; }

    return null;
  };

  this.getPrefixClass = function () {
    return 'ngx-button';
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
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-button, a[ngx-button]',
  template: require('./themes/' + __THEME__ + '/templates/button.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/button.scss')],
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxButtonComponent());