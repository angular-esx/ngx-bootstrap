var NGX_GRID = require('components/grid/index.js');
var ngxCoreService = require('coreService');

function _testCase() {
  this.constructor = [NGX_GRID.SERVICE, function (ngxGridService) {
    this.TYPES = ngxGridService.getTypes();
    this.COLUMN_SIZES = ngxGridService.getColumnSizes();

    this.items = [];

    var _sizes = [this.COLUMN_SIZES.XS_12, this.COLUMN_SIZES.SM_6, this.COLUMN_SIZES.MD_4, this.COLUMN_SIZES.LG_3, this.COLUMN_SIZES.XL_2].join(' ');
    for (var i = 0; i < 10; i++) {
      this.items.push({ name: 'Item ' + (i + 1), size: _sizes });
    }
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/grid/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_GRID.DIRECTIVES
  ],
  providers: [
    NGX_GRID.SERVICE,
    ngxCoreService
  ]
})
.Class(new _testCase());