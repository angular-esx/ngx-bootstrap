var ngxBreadcrumbService = require('./services/breadcrumb.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _breadcrumbComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color'
  };
  
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
  styles: [':host(.ngx-breadcrumb) { padding: 0.75rem 1rem; margin-bottom: 1rem; background-color: #e6e6e6; display: block; } :host(.ngx-breadcrumb)::after { content: ""; display: table; clear: both; } :host(.ngx-breadcrumb) /deep/ .ngx-breadcrumb-item { float: left; color: #818a91; } :host(.ngx-breadcrumb) /deep/ .ngx-breadcrumb-item > a, :host(.ngx-breadcrumb) /deep/ a.ngx-breadcrumb-item { color: #0275d8; } :host(.ngx-breadcrumb) /deep/ .ngx-breadcrumb-item:not(:last-child)::after { padding-right: .5rem; padding-left: .5rem; content: "/"; } :host(.ngx-breadcrumb-color-primary) { background-color: #0275d8; } :host(.ngx-breadcrumb-color-primary) /deep/ .ngx-breadcrumb-item { color: #000; } :host(.ngx-breadcrumb-color-primary) /deep/ .ngx-breadcrumb-item > a, :host(.ngx-breadcrumb-color-primary) /deep/ a.ngx-breadcrumb-item { color: #fff; } :host(.ngx-breadcrumb-color-success) { background-color: #5cb85c; } :host(.ngx-breadcrumb-color-success) /deep/ .ngx-breadcrumb-item { color: #000; } :host(.ngx-breadcrumb-color-success) /deep/ .ngx-breadcrumb-item > a, :host(.ngx-breadcrumb-color-success) /deep/ a.ngx-breadcrumb-item { color: #fff; } :host(.ngx-breadcrumb-color-info) { background-color: #5bc0de; } :host(.ngx-breadcrumb-color-info) /deep/ .ngx-breadcrumb-item { color: #000; } :host(.ngx-breadcrumb-color-info) /deep/ .ngx-breadcrumb-item > a, :host(.ngx-breadcrumb-color-info) /deep/ a.ngx-breadcrumb-item { color: #fff; } :host(.ngx-breadcrumb-color-warning) { background-color: #f0ad4e; } :host(.ngx-breadcrumb-color-warning) /deep/ .ngx-breadcrumb-item { color: #000; } :host(.ngx-breadcrumb-color-warning) /deep/ .ngx-breadcrumb-item > a, :host(.ngx-breadcrumb-color-warning) /deep/ a.ngx-breadcrumb-item { color: #fff; } :host(.ngx-breadcrumb-color-danger) { background-color: #d9534f; } :host(.ngx-breadcrumb-color-danger) /deep/ .ngx-breadcrumb-item { color: #000; } :host(.ngx-breadcrumb-color-danger) /deep/ .ngx-breadcrumb-item > a, :host(.ngx-breadcrumb-color-danger) /deep/ a.ngx-breadcrumb-item { color: #fff; }'],
  providers: [ngxRenderService],
  properties: ['color', 'prefixClass:prefix-class']
})
.Class(new _breadcrumbComponent());