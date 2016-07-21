﻿function _ngxListItemComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxListItemComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);

      if (elementRef) {
        this.clickEmitter = new ng.core.EventEmitter();
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

    if(ngx.isEmpty(this.color)){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    if(ngx.isEmpty(this.state) && ngx.isNull(this.isDisabled)){ this.isDisabled = false; }

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
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-list-item, a[ngx-list-item]',
  template: require('./themes/' + __THEME__ + '/templates/list-item.html'),
  properties: ['color', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxListItemComponent());