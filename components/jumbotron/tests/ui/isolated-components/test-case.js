var ngxJumbotronComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = function() {};
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/jumbotron/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxJumbotronComponent
  ],
  providers: [ngxWindowService]
})
.Class(new _testCase());