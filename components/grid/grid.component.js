var ngxGridService = require('./services/grid.service.js');
var ngxRenderService = require('renderService');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxGridComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxGridService,

    function ngxGridComponent(elementRef, ngxRenderService, ngxGridService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxGridService = ngxGridService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-grid',
  template: require('./themes/' + __THEME__ + '/templates/grid.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/grid.scss')],
  providers: [ngxRenderService],
  properties: ['type']
})
.Class(new _ngxGridComponent());