function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.button.DIRECTIVES,
    ngx.dropMenu.DIRECTIVES,
    ngx.group.DIRECTIVES
  ],
  providers: [
    ngx.dropMenu.PROVIDERS
  ]
})
.Class(new _testCase());