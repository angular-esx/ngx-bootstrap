var ngCore = require('@angular/core/index.js');

function _ngxAlertLinkDirective() {
  this.constructor = function ngxAlertLinkDirective() { };
}

module.exports = ngCore.Directive({
  selector: '[ngx-alert-link]',
  host: {
    '[class.ngx-alert-link]': 'true'
  }
})
.Class(new _ngxAlertLinkDirective());
