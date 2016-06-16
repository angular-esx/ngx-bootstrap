﻿var ngxBreadcrumbComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxBreadcrumbService = require('./../../../services/breadcrumb.service.js');
var ngxBreadcrumbItemDirective = require('./../../../breadcrumb-item.directive.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxItemService = require('./../../../../../cores/components/item/services/item.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
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
  templateUrl: 'components/breadcrumb/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLinkComponent,
    ngxItemComponent,
    ngxBreadcrumbComponent,
    ngxBreadcrumbItemDirective
  ],
   providers: [
    ngxColorService,
    ngxTypeService,
    ngxStateService,
    ngxSizeService,
    ngxWindowService,
    ngxItemService,
    ngxLinkService,
    ngxBreadcrumbService
  ]
})
.Class(new _testCase());