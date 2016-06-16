var ngxListService = require('components/list/services/list.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxListComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxListService,

    function ngxListComponent(elementRef, ngxRenderService, ngxListService) {
      ngxBaseComponent.apply(this, arguments);
      if (elementRef) {
        this.ngxListService = ngxListService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-list',
  template: require('./themes/' + __THEME__ + '/templates/list.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/list.scss')],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxListComponent());