var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _breadcrumbComponent() {
  var _base;
  
  this.extends = ngxCore.baseComponent;
  
  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function breadcrumbComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-breadcrumb';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-breadcrumb',
  template: require('./themes/' + __THEME__ + '/templates/breadcrumb.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/breadcrumb.scss')],
  properties: ['color', 'initCssClass:class']
})
.Class(new _breadcrumbComponent());