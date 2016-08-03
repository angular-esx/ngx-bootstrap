import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';

function _ngxProgressComponent() {
  var _base;
  var _PROPERTIES = {
    VALUE: 'value',
    MAX: 'max'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxProgressComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.currentProgress = 0;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _self = this;
    setTimeout(function () {
      _self.currentProgress = (_self.value / _self.max) * 100;
    });

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.initDefaultValues = function(){
    var _changeRecord;

    if(ngxUtils.isEmpty(this.value)){ 
      this.value = 0;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.VALUE, this.value);
     }

    if(ngxUtils.isEmpty(this.max)){ 
      this.max = 100;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.MAX, this.max);
     }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-progress';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxProgressComponent = ngCore.Component({
  selector: 'ngx-progress',
  templateUrl: './templates/progress.html',
  styleUrls: ['./scss/progress.scss'],
  properties: ['color', 'value', 'max', 'initCssClass:class'],
  host: {
    '[class.ngx-progress]': 'true'
  }
})
.Class(new _ngxProgressComponent());