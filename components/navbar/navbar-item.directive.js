function _ngxNavbarItemDirective() {
  this.constructor = function ngxNavbarItemDirective() {};

  this.ngOnChanges = function (changeRecord) {
    this.isActive = this.state && this.state.indexOf('active') > -1;
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-navbar-item]',
  properties: ['state:ngx-navbar-item-state'],
  host: {
    '[class.ngx-navbar-item]': 'true',
    '[class.ngx-navbar-item-state-active]': 'isActive',
  }
})
.Class(new _ngxNavbarItemDirective());