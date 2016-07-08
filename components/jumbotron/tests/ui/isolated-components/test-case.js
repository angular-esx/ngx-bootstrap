var NGX_JUMBOTRON = require('components/jumbotron/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = function() {};
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/jumbotron/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_JUMBOTRON.DIRECTIVES
  ],
  providers: [NGX_CORE_SERVICES]
})
.Class(new _testCase());