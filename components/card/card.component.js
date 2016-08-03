import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';

function _ngxCardComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxCardComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.initDefaultValues = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.color)) {
      this.color = 'secondary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-card';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxCardComponent = ngCore.Component({
  selector: 'ngx-card',
  templateUrl: './templates/card.html',
  styleUrls: ['./scss/card.scss'],
  properties: ['color', 'initCssClass:class']
})
.Class(new _ngxCardComponent());