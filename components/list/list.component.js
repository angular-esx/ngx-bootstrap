var ngxBaseComponent = require('baseComponent');

function _ngxListComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

  function ngxListComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-list';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
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