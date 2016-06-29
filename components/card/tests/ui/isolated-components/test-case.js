var NGX_CARD = require('components/card/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = function () {};
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/card/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_CARD.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES
  ]
})
.Class(new _testCase());