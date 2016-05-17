var ngxLinkButtonComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxLinkButtonService = require('./../../../services/link-button.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxLinkButtonService, function (ngxLinkButtonService) {
    this.COLORS = ngxLinkButtonService.getColors();
    this.SIZES = ngxLinkButtonService.getSizes();
    this.STATES = ngxLinkButtonService.getStates();
    
    this.href = 'https://www.google.com';
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/link-button/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLinkButtonComponent
  ],
   providers: [
    ngxColorService,
    ngxSizeService,
    ngxStateService,
    ngxLinkButtonService
  ]
})
.Class(new _testCase());