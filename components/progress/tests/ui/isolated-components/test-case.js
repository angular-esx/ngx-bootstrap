var ngxProgressComponent = require('components/progress/progress.component.js');
var ngxProgressService = require('components/progress/services/progress.service.js');
var ngxCoreService = require('coreService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxProgressService, function (ngxProgressService) {
    this.COLORS = ngxProgressService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/progress/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxProgressComponent
  ],
  providers: [
   ngxCoreService,
   ngxProgressService
  ]
})
.Class(new _testCase());