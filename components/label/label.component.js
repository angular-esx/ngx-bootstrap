var ngxLabelService = require('./services/label.service.js');
var ngxRenderService = require('renderService');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxLabelComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLabelService,

    function ngxLabelComponent(elementRef, ngxRenderService, ngxLabelService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxLabelService = ngxLabelService;
      }
    }
  ];

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-label',
  template: require('./themes/' + __THEME__ + '/templates/label.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/label.scss')],
  providers: [ngxRenderService],
  properties: ['color', 'type', 'prefixClass:prefix-class']
})
.Class(new _ngxLabelComponent());