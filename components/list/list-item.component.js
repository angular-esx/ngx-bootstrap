var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxListItemComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxListItemComponent(elementRef, renderer) {
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

  this.click = function (event) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  };

  this.getPrefixClass = function () {
    return 'ngx-list-item';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Directive({
  selector: 'ngx-list-item, a[ngx-list-item]',
  template: require('./themes/' + __THEME__ + '/templates/list-item.html'),
  properties: ['color', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxListItemComponent());