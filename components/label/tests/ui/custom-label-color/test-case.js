var ngxLabelComponent = require('./../../../label.component.js');
var ngxLabelService = require('./../../../services/label.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/render/type.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');

var customLabelColor = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('label', 'custom-label-color'),
    directives: [
      ngxBootstrap.ngxComponents.ngxLabelComponent
    ],
    providers: [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxTypeService,
      ng.core.provide(ngxBootstrap.ngxComponents.ngxLabelService, { useClass: ng.core.Class(new customLabelService()) })
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [ngxBootstrap.ngxComponents.ngxLabelService, function (ngxLabelService) {
      this.COLORS = ngxLabelService.getColors();
    }];
  }

  function customLabelService() {
    ngxBootstrap.shallowCopy(this, new ngxBootstrap.ngxClass.ngxLabelServiceClass(), true);

    this.getDefaultColorClass = function () {
      return this.prefix + 'custom-default';
    };
    this.getOrangeColorClass = function () {
      return this.prefix + 'custom-orange';
    };
  }

module.exports = customLabelColor;