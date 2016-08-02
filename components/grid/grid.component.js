import * as ngCore from '@angular/core';
import ngxBaseComponent from  '../cores';

function _ngxGridComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxGridComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxGridComponent = ngCore.Component({
  selector: 'ngx-grid',
  templateUrl: './templates/grid.html',
  styleUrls: ['./scss/grid.scss'],
  properties: ['type', 'initCssClass:class']
})
.Class(new _ngxGridComponent());