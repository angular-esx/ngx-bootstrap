function _testCase() {
  this.constructor = [ngxBootstrap.grid.SERVICE, function (ngxGridService) {
    this.TYPES = ngxGridService.getTypes();
    this.COLUMN_SIZES = ngxGridService.getColumnSizes();

    this.items = [];

    var _sizes = [this.COLUMN_SIZES.XS_12, this.COLUMN_SIZES.SM_6, this.COLUMN_SIZES.MD_4, this.COLUMN_SIZES.LG_3, this.COLUMN_SIZES.XL_2].join(' ');
    for (var i = 0; i < 10; i++) {
      this.items.push({ name: 'Item ' + (i + 1), size: _sizes });
    }
  }];
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/grid/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.grid.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.grid.SERVICE,
    ngxBootstrap.coreService
  ]
})
.Class(new _testCase());