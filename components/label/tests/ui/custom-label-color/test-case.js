var ngxLabelComponent = require('./../../../label.component.js');
var ngxLabelService = require('./../../../services/label.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/render/type.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

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
    
    this.prefixClass = 'label';
   }
  ];

  this.getDefaultColorClass = function () {
    return this.prefixClass + '-custom-default';
  };
  this.getOrangeColorClass = function () {
    return this.prefixClass + '-custom-orange';
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: ngxBootstrap.configs.fileService.getTestCaseTemplate('label', 'custom-label-color'),
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