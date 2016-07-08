var NGX_LABEL = require('components/label/index.js');
var NGX_CORE_SERVICES = require('coreService');

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
    NGX_CORE_SERVICES
  ]
})
.Class(new _testCase());