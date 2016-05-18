var ngxLabelComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxLabelService = require('./../../../services/label.service.js');
var ngxColorService = require('./../../../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../../../' + __TYPE_SERVICE__);
var ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP_UTILS);

function _testCase() {
  this.constructor = [ngxLabelService, function (ngxLabelService) {
    this.COLORS = ngxLabelService.getColors();
  }];
}

function _customLabelService() {
  this.constructor = [
   ngxColorService, 
   ngxTypeService,
   function (ngxColorService, ngxTypeService) {
    ngxBootstrap.shallowCopy(this, ngxColorService);
    ngxBootstrap.shallowCopy(this, ngxTypeService);   
    
    this.prefixClass = 'ngx-label';
   }
  ];

  this.getSecondaryColorClass = function () {
    return this.prefixClass + '-color-custom-secondary';
  };
  this.getOrangeColorClass = function () {
    return this.prefixClass + '-color-custom-orange';
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/label/tests/ui/custom-label-color/test-case.html',
  directives: [
    ngxLabelComponent
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ng.core.provide(ngxLabelService, { useClass: ng.core.Class(new _customLabelService()) })
  ]
})
.Class(new _testCase());