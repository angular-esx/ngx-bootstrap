var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxCardComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxCardComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];

  this.initDefaultValues = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtil.isEmpty(this.color)) {
      this.color = 'secondary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-card';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-card',
  template: require('./themes/' + __THEME__ + '/templates/card.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/card.scss')],
  properties: ['color', 'initCssClass:class']
})
.Class(new _ngxCardComponent());