var NGX_LABEL = require('./../../../index.js');
var ngxCoreService = require('./../../../../../' + __CORE_SERVICE__);

function _testCase() {
  this.constructor = [NGX_LABEL.SERVICE, function (ngxLabelService) {
    this.COLORS = ngxLabelService.getColors();
    this.TYPES = ngxLabelService.getTypes();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/label/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LABEL.DIRECTIVES
  ],
  providers: [
    NGX_LABEL.SERVICE,
    ngxCoreService
  ]
})
.Class(new _testCase());