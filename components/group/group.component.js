function _ngxGroupComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxGroupComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-group';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-group',
  template: require('./themes/' + __THEME__ + '/templates/group.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/group.scss')],
  properties: ['type', 'size', 'initCssClass:class']
})
.Class(new _ngxGroupComponent());