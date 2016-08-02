import * as ngCore from '@angular/core';
import ngxBaseComponent from  '../cores';

function _ngxBreadcrumbComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxBreadcrumbComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-breadcrumb';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxBreadcrumbComponent = ngCore.Component({
  selector: 'ngx-breadcrumb',
  templateUrl: './templates/breadcrumb.html',
  styleUrls: ['./scss/breadcrumb.scss'],
  properties: ['color', 'initCssClass:class']
})
.Class(new _ngxBreadcrumbComponent());