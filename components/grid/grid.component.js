var ngxBaseComponent = require('baseComponent');

function _ngxGridComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

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

module.exports = ng.core.Component({
  selector: 'ngx-grid',
  template: require('./themes/' + __THEME__ + '/templates/grid.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/grid.scss')],
  properties: ['type', 'initCssClass:class']
})
.Class(new _ngxGridComponent());