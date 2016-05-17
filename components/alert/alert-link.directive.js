function _ngxAlertLinkDirective() {
  this.constructor = function ngxAlertLinkDirective() { };
}

module.exports = ng.core.Directive({
  selector: '[ngx-alert-link]',
  host: {
    '[class.ngx-alert-link]': 'true'
  }
})
.Class(new _ngxAlertLinkDirective());
