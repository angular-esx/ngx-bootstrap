function _ngxListComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

  function ngxListComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-list';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-list',
  template: require('./themes/' + __THEME__ + '/templates/list.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/list.scss')],
  properties: ['initCssClass:class']
})
.Class(new _ngxListComponent());