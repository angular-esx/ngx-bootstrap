var ngCore = require('@angular/core/index.js');

function _ngxNavbarItemDirective() {
  this.constructor = function ngxNavbarItemDirective() {};

  this.ngOnChanges = function (changeRecord) {
    this.isActive = this.state && this.state.indexOf('active') > -1;
  };
}

module.exports = ngCore.Directive({
  selector: '[ngx-navbar-item]',
  properties: ['state:ngx-navbar-item-state'],
  host: {
    '[class.ngx-navbar-item]': 'true',
    '[class.ngx-navbar-item-state-active]': 'isActive',
  }
})
.Class(new _ngxNavbarItemDirective());