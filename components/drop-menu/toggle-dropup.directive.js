var ngxDropMenuService = require('./services/drop-menu.service.js');

function _ngxToggleDropupDirective() {
  this.constructor = [ngxDropMenuService, function ngxToggleDropupDirective(ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;
  }];

  this.toggle = function () {
    this.ngxDropMenuService.toggleDropup(this.id);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-dropup]',
  properties: ['id:ngx-toggle-dropup'],
  host: {
    '[class.ngx-toggle-dropup]': 'true',
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleDropupDirective());