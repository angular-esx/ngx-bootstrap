(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelClass = ngxLabel;

  ngxBootstrap.ngxComponents.ngxLabelComponent = ng.core.Directive({
    selector: 'ngx-label',
    inputs: ['color']
  })
  .Class(new ngxLabel());

  function ngxLabel() {
    this.constructor = [ng.core.ElementRef, ngxBootstrap.ngxComponents.ngxLabelService, function (elementRef, ngxLabelService) {
      this.ngxLabelService = ngxLabelService;
      this.nativeElement = elementRef.nativeElement;
    }];

    this.ngAfterViewInit = function () {
      var _className = this.getClassName() + ' ' + this.ngxLabelService.getColorClass(this.color);

      if (this.nativeElement.className) {
        this.nativeElement.className = _className + ' ' + this.nativeElement.className;
      }
      else {
        this.nativeElement.className = _className;
      }
    };

    this.getClassName = function () {
      return 'label';
    };
  };

})(window.ngxBootstrap);