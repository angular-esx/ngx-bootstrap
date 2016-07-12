function _testCase() {
  this.constructor = [ngxBootstrap.group.SERVICE, function (ngxGroupService) {
    this.TYPES = ngxGroupService.getTypes();
    this.SIZES = ngxGroupService.getSizes();
  }];
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.group.DIRECTIVES,
    ngxBootstrap.button.DIRECTIVES
  ],
  providers: [
   ngxBootstrap.group.SERVICE,
   ngxBootstrap.button.SERVICE
  ]
})
.Class(new _testCase());