var ngxListComponent = require('components/list/list.component.js');
var ngxListItemDirective = require('components/list/list-item.directive.js');
var ngxListService = require('components/list/services/list.service.js');
var ngxCoreService = require('coreService');
var ngxLinkComponent = require('cores/components/link/link.component.js');
var ngxLinkService = require('cores/components/link/services/link.service.js');
var ngxItemComponent = require('cores/components/item/item.component.js');
var ngxItemService = require('cores/components/item/services/item.service.js');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxListService, function (ngxListService) {
    this.COLORS = ngxListService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxListComponent,
    ngxLinkComponent,
    ngxItemComponent,
    ngxListItemDirective
  ],
  providers: [
    ngxCoreService,
    ngxListService,
    ngxLinkService,
    ngxItemService
  ]
})
.Class(new _testCase());