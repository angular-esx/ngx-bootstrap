import * as ngCore from '@angular/core';
import ngxUtils from '../../../../../cores';
import NGX_LINK_DIRECTIVES from '../../../../link';
import { NGX_TABS_DIRECTIVES, NGX_TABS_PROVIDERS } from '../../../../tabs';

function _ngxTestCase() {
  this.constructor = [ngxTabs.tabsService, function (ngxTabsService) {
    this.ngxTabsService = ngxTabsService;

    this.tabs = [
      { id: 'tab03', header: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', header: 'Tab 04', content: 'this is content of tab 04' }
    ];

    this.pillTabs = [
      { id: 'tab03', header: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', header: 'Tab 04', content: 'this is content of tab 04' }
    ];
  }];

  this.removeTab = function (tab) {
    ngxUtils.splice(this.tabs, tab);
  };

  this.removePillTab = function (tab) {
    ngxUtils.splice(this.pillTabs, tab);
  };

  this.selectTab = function (id) {
    this.ngxTabsService.select(id);
  };

  this.changedTab = function (event) {
    console.log('changed to tab ' + event.id);
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tabs/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LINK_DIRECTIVES,
    NGX_TABS_DIRECTIVES
  ],
  providers: [
    NGX_TABS_PROVIDERS
  ]
})
.Class(new _ngxTestCase());