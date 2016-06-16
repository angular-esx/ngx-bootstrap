function _ngxToggleDropdownDirective() {
  this.constructor = function ngxToggleDropdownDirective() { };
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-dropdown]',
  host: {
    '[class.ngx-toggle-dropdown]': 'true'
  }
})
.Class(new _ngxToggleDropdownDirective());