import * as ngCore from '@angular/core';
import { ngxBaseComponent } from  '../../cores';

function _ngxCardHeaderComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxCardHeaderComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-card-header';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxCardHeaderComponent = ngCore.Component({
  selector: 'ngx-card-header',
  templateUrl: './templates/card-header.html',
  properties: ['initCssClass:class']
})
.Class(new _ngxCardHeaderComponent());