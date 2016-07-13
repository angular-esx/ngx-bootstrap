var ngxBaseComponent = require('baseComponent');

function _ngxGroupComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxGroupComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-group';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
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