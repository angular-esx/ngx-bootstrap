var ngCore = require('@angular/core/index.js');

function _ngxNavbarBrandDirective() {
  this.constructor = function ngxNavbarBrandDirective() { };
}

module.exports = ngCore.Directive({
  selector: '[ngx-navbar-brand]',
  host: {
    '[class.ngx-navbar-brand]': 'true'
  }
})
.Class(new _ngxNavbarBrandDirective());