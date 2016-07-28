var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxNavbarComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxNavbarComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];

  this.initDefaultValues = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtil.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-navbar';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-navbar',
  template: require('./themes/' + __THEME__ + '/templates/navbar.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/navbar.scss')],
  properties: ['color', 'position', 'initCssClass:class']
})
.Class(new _ngxNavbarComponent());