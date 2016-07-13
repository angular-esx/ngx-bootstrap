var ngxBaseComponent = require('baseComponent');

function _ngxCardHeaderComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxCardHeaderComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-card-header';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-card-header',
  template: require('./themes/' + __THEME__ + '/templates/card-header.html'),
  properties: ['initCssClass:class']
})
.Class(new _ngxCardHeaderComponent());