var ngxRenderService = require('./../../services/render/render.service.js');
var ngxBootstrap = require('./../../ngx-bootstrap.js');
ngxBootstrap = require('./../../ngx-bootstrap.utils.js');

function _ngxBaseComponent() {
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function (elementRef, ngxRenderService) {
      this.elementRef = elementRef;
      
      this.ngxRenderService = ngxRenderService ? ngxRenderService.for(elementRef.nativeElement) : null;
    }
  ];
  
  this.ngOnChanges = function (changeRecord) {
    this.cssClass = this.onBuildCssClass(changeRecord);
  };

  this.onBuildCssClass = function(changeRecord){ return ''; };

  this.getPrevPropertyValue = function (changeRecord, propertyName) {
    return changeRecord[propertyName] ? (ngxBootstrap.isString(changeRecord[propertyName].previousValue) ? changeRecord[propertyName].previousValue : null) : this[propertyName];
  };
  
  this.getCurrentPropertyValue = function (changeRecord, propertyName) {
    return changeRecord[propertyName] ? changeRecord[propertyName].currentValue : this[propertyName];
  };
  
  this.removeOneTimeBindingAttributes = function (attributes) {
    var _self = this,
        _attributes = ngxBootstrap.isArray(attributes) ? attributes : [attributes];
        
    ngxBootstrap.forEach(_attributes, function (attribute) {
      _self.ngxRenderService.removeAttribute(attribute);
    });
  };
  
}

module.exports = ng.core.Class(new _ngxBaseComponent());