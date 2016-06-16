var ngxNavbarComponent = require('components/navbar/navbar.component.js');
var ngxNavbarBrandDirective = require('components/navbar/navbar-brand.directive.js');
var ngxNavbarItemDirective = require('components/navbar/navbar-item.directive.js');
var ngxNavbarDividerDirective = require('components/navbar/navbar-divider.directive.js');
var ngxNavbarService = require('components/navbar/services/navbar.service.js');
var ngxCoreService = require('coreService');
var ngxLinkComponent = require('cores/components/link/link.component.js');
var ngxLinkService = require('cores/components/link/services/link.service.js');
var ngxItemComponent = require('cores/components/item/item.component.js');
var ngxItemService = require('cores/components/item/services/item.service.js');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxNavbarService, function (ngxNavbarService) {
    this.COLORS = ngxNavbarService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/navbar/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxNavbarComponent,
    ngxLinkComponent,
    ngxItemComponent,
    ngxNavbarBrandDirective,
    ngxNavbarItemDirective,
    ngxNavbarDividerDirective
  ],
  providers: [
    ngxCoreService,
    ngxNavbarService,
    ngxLinkService,
    ngxItemService
  ]
})
.Class(new _testCase());