var ngxJumbotronComponent = require('./../../../jumbotron.component.js');
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
  ]
})
.Class(new _testCase());