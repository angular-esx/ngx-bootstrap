var ngxLabelComponent = require('./../../../label.component.js');
var ngxLabelService = require('./../../../services/label.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/render/type.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: ngxBootstrap.configs.fileService.getTestCaseTemplate('label'),
  directives: [
    ngxLabelComponent
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ngxLabelService
  ]
})
.Class(new testCase());

function testCase() {
  this.constructor = [ngxLabelService, function (ngxLabelService) {
    this.COLORS = ngxLabelService.getColors();
    this.TYPES = ngxLabelService.getTypes();
  }];
}

module.exports = isolatedComponents;