import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';

function _ngxButtonComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxButtonComponent(elementRef, renderer) {
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
    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isDisabled)){ this.isDisabled = false; }

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
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxButtonComponent = ngCore.Component({
  selector: 'ngx-button, a[ngx-button]',
  templateUrl: './templates/button.html',
  styleUrls: ['./scss/button.scss'],
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxButtonComponent());