var ngxProgressService = require('./services/progress.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxProgressComponent() {
  var _base;
  var _ATTRIBUTES = {
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

  this.ngAfterContentInit = function () {
    if (this.value === undefined || this.value === null || isNaN(this.value) || this.value < 0) {
      this.value = 0;
    }

    if (this.max === undefined || this.max === null || isNaN(this.max) || this.max < 0) {
      this.max = 100;
    }

    var _self = this,
        _attributes = [
      _ATTRIBUTES.VALUE,
      _ATTRIBUTES.MAX
        ];

    this.removeOneTimeBindingAttributes(_attributes);

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-progress',
  template: require('./themes/' + __THEME__ + '/templates/progress.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/progress.scss')],
  providers: [ngxRenderService],
  properties: ['color', 'value', 'max']
})
.Class(new _ngxProgressComponent());