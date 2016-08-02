import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../cores';

function _ngxNavbarComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxNavbarComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.initDefaultValues = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-navbar';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var _ngxNavbarComponent = ngCore.Component({
  selector: 'ngx-navbar',
  templateUrl: './templates/navbar.html',
  styleUrls: ['./scss/navbar.scss'],
  properties: ['color', 'position', 'initCssClass:class']
})
.Class(new _ngxNavbarComponent());