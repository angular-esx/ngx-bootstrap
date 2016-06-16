var ngxNavbarService = require('components/navbar/services/navbar.service.js');

function _ngxNavbarItemDirective() {
  this.constructor = [
    ngxNavbarService,

    function ngxNavbarItemDirective(ngxNavbarService) {
      this.ngxNavbarService = ngxNavbarService;
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    this.isActive = this.ngxNavbarService.isActiveStateClass(this.getPrefixClass(), this.state);
  };

  this.getPrefixClass = function () {
    return 'ngx-navbar-item';
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