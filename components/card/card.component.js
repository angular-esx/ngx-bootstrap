function _ngxCardComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxCardComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-card';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
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