var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _ngxGridComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxGridComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-grid',
  template: require('./themes/' + __THEME__ + '/templates/grid.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/grid.scss')],
  properties: ['type', 'initCssClass:class']
})
.Class(new _ngxGridComponent());