function _testCase() {
  this.constructor = [ngxBootstrap.dropMenu.DROPMENU_SERVICE, function (ngxDropMenuService) {
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
    ngxBootstrap.group.DIRECTIVES,
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.link.DIRECTIVES,
    ngxBootstrap.dropMenu.DIRECTIVES
  ],
  providers: [
   ngxBootstrap.dropMenu.SERVICES
  ]
})
.Class(new _testCase());