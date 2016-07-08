var ngxBreadcrumbService = require('./services/breadcrumb.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

function _breadcrumbComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxBreadcrumbService,

    function breadcrumbComponent(elementRef, ngxRenderService, ngxBreadcrumbService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxBreadcrumbService = ngxBreadcrumbService;
      }
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-breadcrumb',
  template: require('./themes/' + __THEME__ + '/templates/breadcrumb.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/breadcrumb.scss')],
  providers: [ngxRenderService],
  properties: ['color', 'prefixClass:prefix-class']
})
.Class(new _breadcrumbComponent());