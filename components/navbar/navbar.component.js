var ngxBaseComponent = require('baseComponent');

function _ngxNavbarComponent() {
  var _base;
  var _ATTRIBUTES = {
    POSITION: 'position'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxNavbarComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-navbar';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
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