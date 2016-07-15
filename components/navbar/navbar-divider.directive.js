function _ngxNavbarDividerDirective() {
  this.constructor = function ngxNavbarDividerDirective() { };
}

module.exports = ng.core.Directive({
  selector: 'ngx-navbar-divider',
  host: {
    '[class.ngx-navbar-divider]': 'true'
  }
})
.Class(new _ngxNavbarDividerDirective());