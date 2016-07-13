var ngxBaseComponent = require('baseComponent');

function _ngxCardComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxCardComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-card';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-card',
  template: require('./themes/' + __THEME__ + '/templates/card.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/card.scss')],
  properties: ['initCssClass:class']
})
.Class(new _ngxCardComponent());