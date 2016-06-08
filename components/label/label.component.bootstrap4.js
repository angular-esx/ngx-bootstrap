var ngxLabelService = require('./services/label.service.js');
var ngxRenderService = require('./../../' + __RENDER_SERVICE__);
var ngxBaseComponent = require('./../../' + __BASE_COMPONENT__);
var ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP_UTILS__);

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
  template: '<ng-content></ng-content>',
  styles: [':host(.ngx-label) a { background-color: transparent; cursor: pointer; } :host(.ngx-label) a:focus, :host(.ngx-label) a:hover, :host(.ngx-label) a:active { outline: 0; } :host(.ngx-label) { display: inline-block; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 0.75em; font-weight: bold; line-height: 1; padding: 0.25em 0.4em; text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.25rem; } :host(.ngx-label) a { color: white; } :host(.ngx-label) a :focus, :host(.ngx-label) a:hover { color: white; text-decoration: none; } :host(.ngx-label):empty { display: none; } :host(.ngx-label).ngx-label-type-pill { padding: 0.25em 0.6em; border-radius: 10rem; } :host(.ngx-label).ngx-label-color-primary { color: white; background-color: #0270d2; } :host(.ngx-label).ngx-label-color-secondary { color: white; background-color: #838b92; } :host(.ngx-label).ngx-label-color-info { color: white; background-color: #60c2df; } :host(.ngx-label).ngx-label-color-success { color: white; background-color: #5cb85c; } :host(.ngx-label).ngx-label-color-warning { color: white; background-color: #f0ad4e; } :host(.ngx-label).ngx-label-color-danger { color: white; background-color: #da5350; } '],
  providers: [ngxRenderService],
  properties: ['color', 'type', 'prefixClass:prefix-class']
})
.Class(new _ngxLabelComponent());