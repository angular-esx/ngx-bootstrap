function _ngxGridComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxGridComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
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