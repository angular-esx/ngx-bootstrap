var ngCore = require('@angular/core/index.js');

function _ngxNavbarDividerDirective() {
  this.constructor = function ngxNavbarDividerDirective() { };
}

module.exports = ngCore.Directive({
  selector: 'ngx-navbar-divider',
  host: {
    '[class.ngx-navbar-divider]': 'true'
  }
})
.Class(new _ngxNavbarDividerDirective());