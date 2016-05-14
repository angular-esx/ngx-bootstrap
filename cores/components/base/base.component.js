var ngxBaseDirective = require('./../../directives/base/base.directive.js');
var ngxRenderService = require('./../../services/render/render.service.js');
var ngxBootstrap = require('./../../ngx-bootstrap.js');
ngxBootstrap = require('./../../ngx-bootstrap.utils.js');

function _ngxBaseComponent() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    [new ng.core.Optional(), null],

    function ngxBaseComponent(elementRef, ngxRenderService, ngxBaseService) {
      ngxBaseDirective.apply(this, arguments);
    }
  ];

  this.ngAfterViewInit = function(){
    if(this.prefixClass && (this.cssClass === null || this.cssClass === undefined)){
      this.cssClass = this.prefixClass;
      
      this.ngxRenderService.insertClass(this.cssClass, 0);
    }
  };

  this.removeOneTimeBindingAttributes = function (attributes) {
    var _self = this,
        _attributes = ngxBootstrap.isArray(attributes) || ngxBootstrap.isObject(attributes) ? attributes : [attributes];
        
    ngxBootstrap.forEach(_attributes, function (attribute) {
      _self.ngxRenderService.removeAttribute(attribute);
    });
  };
  
  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Class(new _ngxBaseComponent());