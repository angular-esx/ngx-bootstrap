var ngCore = require('@angular/core/index.js');

function _ngxDropMenuItemDirective() {
  this.constructor = function ngxDropMenuItemDirective() {};

  this.ngOnChanges = function (changeRecord) {
    this.isDisabled = this.state && this.state.indexOf('disabled') > -1;
  };
}

module.exports = ngCore.Directive({
  selector: '[ngx-drop-menu-item]',
  properties: ['state:ngx-drop-menu-item-state'],
  host: {
    '[class.ngx-drop-menu-item]': 'true',
    '[class.ngx-drop-menu-item-state-disabled]': 'isDisabled',
  }
})
.Class(new _ngxDropMenuItemDirective());
