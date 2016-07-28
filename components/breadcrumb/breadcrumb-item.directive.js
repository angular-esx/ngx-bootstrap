var ngCore = require('@angular/core/index.js');

function _ngxBreadcrumbItemDirective() {
  this.constructor = function ngxBreadcrumbItemDirective() { };
}

module.exports = ngCore.Directive({
  selector: '[ngx-breadcrumb-item]',
  host: {
    '[class.ngx-breadcrumb-item]': 'true'
  }
})
.Class(new _ngxBreadcrumbItemDirective());