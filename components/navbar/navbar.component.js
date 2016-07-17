function _ngxNavbarComponent() {
  var _base;
  var _ATTRIBUTES = {
    POSITION: 'position'
  };

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxNavbarComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-navbar';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-navbar',
  template: require('./themes/' + __THEME__ + '/templates/navbar.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/navbar.scss')],
  properties: ['color', 'position', 'initCssClass:class']
})
.Class(new _ngxNavbarComponent());