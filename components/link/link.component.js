import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';

function _ngxLinkComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxLinkComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);

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

    if(ngxUtils.isEmpty(this.color)){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isDisabled)){ this.isDisabled = false; }

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
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxLinkComponent = ngCore.Component({
  selector: 'a[ngx-link]',
  templateUrl: './templates/link.html',
  styleUrls: ['./scss/link.scss'],
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxLinkComponent());