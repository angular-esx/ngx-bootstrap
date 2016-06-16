function _ngxToggleDropupDirective() {
  this.constructor = function ngxToggleDropupDirective() { };
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-dropup]',
  host: {
    '[class.ngx-toggle-dropup]': 'true'
  }
})
.Class(new _ngxToggleDropupDirective());