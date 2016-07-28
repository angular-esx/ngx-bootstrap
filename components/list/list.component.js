var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _ngxListComponent() {
  var _base;

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

  function ngxListComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-list';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-list',
  template: require('./themes/' + __THEME__ + '/templates/list.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/list.scss')],
  properties: ['initCssClass:class']
})
.Class(new _ngxListComponent());