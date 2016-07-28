var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _ngxCardHeaderComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxCardHeaderComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-card-header';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-card-header',
  template: require('./themes/' + __THEME__ + '/templates/card-header.html'),
  properties: ['initCssClass:class']
})
.Class(new _ngxCardHeaderComponent());