function _testCase() {
  this.constructor = [ngx.dropMenu.dropMenuService, function (ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;

    this.href = 'https://translate.google.com.vn';
  }];

  this.alert = function (id) {
    alert('You have just clicked ' + id);
  };

  this.toggleDropdown = function (id) {
    this.ngxDropMenuService.toggleDropdown(id);
  };

  this.toggleDropup = function (id) {
    this.ngxDropMenuService.toggleDropup(id);
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/drop-menu/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.group.DIRECTIVES,
    ngx.button.DIRECTIVES,
    ngx.link.DIRECTIVES,
    ngx.dropMenu.DIRECTIVES
  ],
  providers: [
   ngx.dropMenu.PROVIDERS
  ]
})
.Class(new _testCase());