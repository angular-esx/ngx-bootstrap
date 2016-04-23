(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxBaseComponent = ng.core.Class(new _ngxBaseComponent());

  function _ngxBaseComponent() {
    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRenderService,

      function (elementRef, ngxRenderService) {
        this.elementRef = elementRef;
        
        this.ngxRenderService = ngxRenderService ? ngxRenderService.for(elementRef.nativeElement) : null;
      }
    ];

    this.getPrevPropertyValue = function (changeRecord, propertyName) {
      return changeRecord[propertyName] ? (ngxBootstrap.isString(changeRecord[propertyName].previousValue) ? changeRecord[propertyName].previousValue : null) : this[propertyName];
    };
    this.getCurrentPropertyValue = function (changeRecord, propertyName) {
      return changeRecord[propertyName] ? changeRecord[propertyName].currentValue : this[propertyName];
    };
  }

})(window.ngxBootstrap);