var ngCore = require('@angular/core/index.js');
var ngxJumbotron = require('../../../../jumbotron/index.js');

function _testCase() {
  this.constructor = function() {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/jumbotron/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxJumbotron.JUMBOTRON_DIRECTIVES
  ]
})
.Class(new _testCase());