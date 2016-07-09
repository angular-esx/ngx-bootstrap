var ngxCollapseComponent = require('components/collapse/collapse.component.js');
var ngxToggleCollapseDirective = require('components/collapse/toggle-collapse.directive.js');
var ngxCollapseService = require('components/collapse/services/collapse.service.js');
var ngxCoreService = require('coreService');
var ngxButtonComponent = require('components/button/button.component.js');
var ngxButtonService = require('components/button/services/button.service.js');

function _testCase() {
  this.constructor = [ngxCollapseService, function (ngxCollapseService) {
    this.STATES = ngxCollapseService.getStates();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxCollapseComponent,
    ngxButtonComponent,
    ngxToggleCollapseDirective
  ],
  providers: [
    ngxCoreService,
    ngxCollapseService,
    ngxButtonService
  ]
})
.Class(new _testCase());