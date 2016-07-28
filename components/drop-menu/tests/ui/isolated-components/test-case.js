var ngCore = require('@angular/core/index.js');
var ngxGroup = require('../../../../group/index.js');
var ngxButton = require('../../../../button/index.js');
var ngxLink = require('../../../../link/index.js');
var ngxDropMenu = require('../../../../drop-menu/index.js');

function _testCase() {
  this.constructor = [ngx.dropMenu.dropMenuService, function (ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;

    this.href = 'https://translate.google.com.vn';
  }];

  this.alert = function (id) {
    alert('You have just clicked ' + id);
  };

  this.toggleDropdown = function (id) {
    this.ngxDropMenuService.toggleDropdown(id);
  };

  this.toggleDropup = function (id) {
    this.ngxDropMenuService.toggleDropup(id);
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/drop-menu/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxGroup.GROUP_DIRECTIVES,
    ngxButton.BUTTON_DIRECTIVES,
    ngxLink.LINK_DIRECTIVES,
    ngxDropMenu.DROPMENU_DIRECTIVES
  ],
  providers: [
   ngxDropMenu.DROPMENU_PROVIDERS
  ]
})
.Class(new _testCase());