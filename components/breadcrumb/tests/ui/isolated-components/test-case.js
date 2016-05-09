var ngxBreadcrumbComponent = require('./../../../breadcrumb.component.js');
var ngxBreadcrumbService = require('./../../../services/breadcrumb.service.js');
var ngxBreadcrumbItemService = require('./../../../services/breadcrumb-item.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [
    ngxBreadcrumbService, 
  
    function (ngxBreadcrumbService) {
      this.COLORS = ngxBreadcrumbService.getColors();
      
      this.categoryPage = 'http://my-website.com/category';
      this.productPage = 'http://my-website.com/product';
    }
  ];
}


module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: ngxBootstrap.configs.fileService.getTestCaseTemplate('breadcrumb'),
  directives: [
    ngxLinkComponent,
    ngxItemComponent,
    ngxBreadcrumbComponent
  ],
   providers: [
    ngxColorService,
    ngxBreadcrumbService,
    ngxBreadcrumbItemService
  ]
})
.Class(new _testCase());