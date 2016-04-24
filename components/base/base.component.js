var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrapUtils = require('./../../cores/ngx-bootstrap.utils.js');

var ngxBaseComponent = ng.core.Class(new _ngxBaseComponent());

function _ngxBaseComponent() {
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function (elementRef, ngxRenderService) {
      this.elementRef = elementRef;
      
      this.ngxRenderService = ngxRenderService ? ngxRenderService.for(elementRef.nativeElement) : null;
    }
  ];

  this.getPrevPropertyValue = function (changeRecord, propertyName) {
    return changeRecord[propertyName] ? (ngxBootstrapUtils.isString(changeRecord[propertyName].previousValue) ? changeRecord[propertyName].previousValue : null) : this[propertyName];
  };
  this.getCurrentPropertyValue = function (changeRecord, propertyName) {
    return changeRecord[propertyName] ? changeRecord[propertyName].currentValue : this[propertyName];
  };
}

module.exports = ngxBaseComponent;