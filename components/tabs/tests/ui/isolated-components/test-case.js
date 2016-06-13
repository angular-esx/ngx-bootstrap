var ngxTabsComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxTabsService = require('./../../../../../components/tabs/services/tabs.service.js');
var ngxTabDirective = require('./../../../../../components/tabs/tab.directive.js');
var ngxTabHeadDirective = require('./../../../../../components/tabs/tab-head.directive.js');
var ngxTabContentDirective = require('./../../../../../components/tabs/tab-content.directive.js');
var ngxAnimationService = require('./../../../../../cores/services/animation.service.js');
var ngxColorService = require('./../../../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxItemService = require('./../../../../../cores/components/item/services/item.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxTabsService, function (ngxTabsService) {
    this.ngxTabsService = ngxTabsService;

    this.tabs = [
      { id: 'tab03', head: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', head: 'Tab 04', content: 'this is content of tab 04' }
    ];

    this.pillTabs = [
      { id: 'tab03', head: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', head: 'Tab 04', content: 'this is content of tab 04' }
    ];
  }];

  this.removeTab = function (tab) {
    ngxBootstrap.splice(this.tabs, tab);
  };

  this.removePillTab = function (tab) {
    ngxBootstrap.splice(this.pillTabs, tab);
  };

  this.selectTab = function (tab) {
    this.ngxTabsService.select(tab);
  };

  this.changedTab = function (event) {
    //alert('changed to tab ' + event.target.id);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tabs/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxTabsComponent,
    ngxLinkComponent,
    ngxItemComponent,
    ngxTabDirective,
    ngxTabHeadDirective,
    ngxTabContentDirective
  ],
  providers: [
    ngxWindowService,
    ngxAnimationService,
    ngxColorService,
    ngxTypeService,
    ngxSizeService,
    ngxStateService,
    ngxLinkService,
    ngxItemService,
    ngxTabsService
  ]
})
.Class(new _testCase());