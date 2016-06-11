var ngxBreadcrumbService = require('./services/breadcrumb.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

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
  template: '<ng-content></ng-content>',
  styles: [':host(.ngx-breadcrumb) a { text-decoration: none; background-color: transparent; cursor: pointer; } :host(.ngx-breadcrumb) a:focus, :host(.ngx-breadcrumb) a:hover, :host(.ngx-breadcrumb) a:active { outline: 0; } :host(.ngx-breadcrumb) { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; display: block; padding: 0.75rem 1rem; margin: 0 0 1rem 0; background-color: transparent; } :host(.ngx-breadcrumb)::after { content: ""; display: table; clear: both; } :host(.ngx-breadcrumb) > .ngx-breadcrumb-item { float: left; } :host(.ngx-breadcrumb) > .ngx-breadcrumb-item:not(:last-child)::after { text-decoration: none; padding: 0 0.5rem 0 0.5rem; content: "/"; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-primary { background-color: #0270d2; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-primary > .ngx-breadcrumb-item, :host(.ngx-breadcrumb).ngx-breadcrumb-color-primary > .ngx-breadcrumb-item a { color: white; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-secondary { background-color: #dfdfdf; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-secondary > .ngx-breadcrumb-item, :host(.ngx-breadcrumb).ngx-breadcrumb-color-secondary > .ngx-breadcrumb-item a { color: #373a3c; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-info { background-color: #60c2df; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-info > .ngx-breadcrumb-item, :host(.ngx-breadcrumb).ngx-breadcrumb-color-info > .ngx-breadcrumb-item a { color: white; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-success { background-color: #5cb85c; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-success > .ngx-breadcrumb-item, :host(.ngx-breadcrumb).ngx-breadcrumb-color-success > .ngx-breadcrumb-item a { color: white; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-warning { background-color: #f0ad4e; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-warning > .ngx-breadcrumb-item, :host(.ngx-breadcrumb).ngx-breadcrumb-color-warning > .ngx-breadcrumb-item a { color: white; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-danger { background-color: #da5350; } :host(.ngx-breadcrumb).ngx-breadcrumb-color-danger > .ngx-breadcrumb-item, :host(.ngx-breadcrumb).ngx-breadcrumb-color-danger > .ngx-breadcrumb-item a { color: white; } '],
  providers: [ngxRenderService],
  properties: ['color', 'prefixClass:prefix-class']
})
.Class(new _breadcrumbComponent());