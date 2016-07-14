var ngxDropMenuService = require('./services/drop-menu.service.js');

function _ngxToggleDropdownDirective() {
  this.constructor = [ngxDropMenuService, function ngxToggleDropdownDirective(ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;
  }];

  this.toggle = function () {
    this.ngxDropMenuService.toggleDropdown(this.id);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-dropdown]',
  properties: ['id:ngx-toggle-dropdown'],
  host: {
    '[class.ngx-toggle-dropdown]': 'true',
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleDropdownDirective());