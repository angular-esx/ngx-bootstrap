function _ngxBreadcrumbItemDirective() {
  this.constructor = function ngxBreadcrumbItemDirective() { };
}

module.exports = ng.core.Directive({
  selector: '[ngx-breadcrumb-item]',
  host: {
    '[class.ngx-breadcrumb-item]': 'true'
  }
})
.Class(new _ngxBreadcrumbItemDirective());