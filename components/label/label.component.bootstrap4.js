var ngxLabelService = require('./services/label.service.js');
var ngxRenderService = require('./../../' + __RENDER_SERVICE__);
var ngxBaseComponent = require('./../../' + __BASE_COMPONENT__);
var ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP_UTILS__);

function _ngxLabelComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color',
    TYPE: 'type'
  };

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
  template: '<ng-content></ng-content>',
  styles: [':host(.ngx-label) { display: inline-block; padding: .25em .4em; font-size: 75%; font-weight: bold; line-height: 1; color: #fff; text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.25rem; } :host(.ngx-label):empty { display: none; } :host(.ngx-label-type-pill) { padding-right: .6em; padding-left: .6em; border-radius: 10rem; } :host(.ngx-label-color-primary) { background-color: #0275d8; } :host(.ngx-label-color-primary)[href]:focus, :host(.ngx-label-color-primary)[href]:hover { background-color: #025aa5; } :host(.ngx-label-color-success) { background-color: #5cb85c; } :host(.ngx-label-color-success)[href]:focus, :host(.ngx-label-color-success)[href]:hover { background-color: #449d44; } :host(.ngx-label-color-info) { background-color: #5bc0de; } :host(.ngx-label-color-info)[href]:focus, :host(.ngx-label-color-info)[href]:hover { background-color: #31b0d5; } :host(.ngx-label-color-warning) { background-color: #f0ad4e; } :host(.ngx-label-color-warning)[href]:focus, :host(.ngx-label-color-warning)[href]:hover { background-color: #ec971f; } :host(.ngx-label-color-danger) { background-color: #d9534f; } :host(.ngx-label-color-danger)[href]:focus, :host(.ngx-label-color-danger)[href]:hover { background-color: #c9302c; } '],
  providers: [ngxRenderService],
  properties: ['color', 'type', 'prefixClass:prefix-class']
})
.Class(new _ngxLabelComponent());