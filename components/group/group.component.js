var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _ngxGroupComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxGroupComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-group';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-group',
  template: require('./themes/' + __THEME__ + '/templates/group.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/group.scss')],
  properties: ['type', 'size', 'initCssClass:class']
})
.Class(new _ngxGroupComponent());