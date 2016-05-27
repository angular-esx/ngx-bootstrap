function _ngxNavbarBrandDirective() {
  this.constructor = function ngxNavbarBrandDirective() { };
}

module.exports = ng.core.Directive({
  selector: '[ngx-navbar-brand]',
  host: {
    '[class.ngx-navbar-brand]': 'true'
  }
})
.Class(new _ngxNavbarBrandDirective());