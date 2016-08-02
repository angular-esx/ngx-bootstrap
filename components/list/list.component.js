import * as ngCore from '@angular/core';
import ngxBaseComponent from  '../cores';

function _ngxListComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

  function ngxListComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-list';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxListComponent = ngCore.Component({
  selector: 'ngx-list',
  templateUrl: './templates/list.html',
  styleUrls: ['./scss/list.scss'],
  properties: ['initCssClass:class']
})
.Class(new _ngxListComponent());