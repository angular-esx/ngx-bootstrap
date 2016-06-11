var ngxButtonComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxButtonService = require('./../../../services/button.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxButtonService, function (ngxButtonService) {
    this.COLORS = ngxButtonService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/button/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxButtonComponent
  ],
   providers: [
    ngxColorService,
    ngxSizeService,
    ngxStateService,
    ngxWindowService,
    ngxButtonService
  ]
})
.Class(new _testCase());