var ngxLabelComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxLabelService = require('./../../../services/label.service.js');
var ngxColorService = require('./../../../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../../../' + __TYPE_SERVICE__);
var ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP_UTILS__);

function _testCase() {
  this.constructor = [ngxLabelService, function (ngxLabelService) {
    this.COLORS = ngxLabelService.getColors();
    this.TYPES = ngxLabelService.getTypes();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/label/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLabelComponent
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ngxLabelService
  ]
})
.Class(new _testCase());