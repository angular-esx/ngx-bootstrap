import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from '../../cores';


function _ngxLabelComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxLabelComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.initDefaultValues = function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

     return _changeRecord;
  };

  this.getPrefixClass = function(){
    return 'ngx-label';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}


export var ngxLabelComponent = ngCore.Component({
  selector: 'ngx-label',
  templateUrl: './templates/label.html',
  styleUrls: ['./scss/label.scss'],
  properties: ['color', 'type', 'initCssClass:class']
})
.Class(new _ngxLabelComponent());