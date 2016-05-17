var ngxProgressComponent = require('./../../../progress.component.js');
var ngxProgressService = require('./../../../services/progress.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

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
   ngxColorService,
   ngxProgressService
  ]
})
.Class(new _testCase());