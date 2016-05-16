var ngxProgressService = require('./services/progress.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxProgressComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color',
    VALUE: 'value',
    MAX: 'max'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxProgressService,

    function ngxProgressComponent(elementRef, ngxRenderService, ngxProgressService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxProgressService = ngxProgressService;
      }
    }
  ];

  this.ngOnInit = function () {
    if (this.elementRef) {
      if (this.value === undefined || this.value === null || isNaN(this.value) || this.value < 0) {
        this.value = 0;
      }

      if (this.max === undefined || this.max === null || isNaN(this.max) || this.max < 0) {
        this.max = 100;
      }
    }
  };

  this.ngAfterViewInit = function () {
    _getBaseInstance(this).ngAfterViewInit.apply(this);

    var _self = this,
        _attributes = [
      _ATTRIBUTES.VALUE,
      _ATTRIBUTES.MAX
    ];

    this.removeOneTimeBindingAttributes(_attributes);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-progress',
  templateUrl: 'components/progress/templates/progress.bootstrap4.html',
  styleUrls: ['components/progress/css/progress.bootstrap4.css'],
  providers: [ngxRenderService],
  properties: ['color', 'value', 'max']
})
.Class(new _ngxProgressComponent());