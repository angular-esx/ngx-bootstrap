import * as ngCore from '@angular/core';
import { ngxBaseComponent } from  '../../cores';

function _ngxGroupComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxGroupComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-group';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxGroupComponent = ngCore.Component({
  selector: 'ngx-group',
  templateUrl: './templates/group.html',
  styleUrls: ['./scss/group.scss'],
  properties: ['type', 'size', 'initCssClass:class']
})
.Class(new _ngxGroupComponent());