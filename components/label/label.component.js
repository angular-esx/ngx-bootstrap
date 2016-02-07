(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelClass = ngxLabel;
  ngxBootstrap.ngxClass.ngxLabelPrimaryClass = ngxLabelPrimary;
  ngxBootstrap.ngxClass.ngxLabelInfoClass = ngxLabelInfo;
  ngxBootstrap.ngxClass.ngxLabelSuccessClass = ngxLabelSuccess;
  ngxBootstrap.ngxClass.ngxLabelWarningClass = ngxLabelWarning;
  ngxBootstrap.ngxClass.ngxLabelDangerClass = ngxLabelDanger;

  ngxBootstrap.ngxComponents.ngxLabelComponent = ng.core.Directive({
    selector: 'ngx-label',
  })
  .Class(new ngxLabel());

  ngxBootstrap.ngxComponents.ngxLabelPrimaryComponent = ng.core.Directive({
    selector: 'ngx-label-primary',
  })
  .Class(new ngxLabelPrimary());

  ngxBootstrap.ngxComponents.ngxLabelInfoComponent = ng.core.Directive({
    selector: 'ngx-label-info',
  })
  .Class(new ngxLabelInfo());

  ngxBootstrap.ngxComponents.ngxLabelSuccessComponent = ng.core.Directive({
    selector: 'ngx-label-success',
  })
  .Class(new ngxLabelSuccess());

  ngxBootstrap.ngxComponents.ngxLabelWarningComponent = ng.core.Directive({
    selector: 'ngx-label-warning',
  })
  .Class(new ngxLabelWarning());

  ngxBootstrap.ngxComponents.ngxLabelDangerComponent = ng.core.Directive({
    selector: 'ngx-label-danger',
  })
  .Class(new ngxLabelDanger());


  function ngxLabel() {
    this.constructor = [ng.core.ElementRef, function (elementRef) {
      this.nativeElement = elementRef.nativeElement;
    }];

    this.ngAfterViewInit = function () {
      if (this.nativeElement.className) {
        this.nativeElement.className = this.getClassName() + ' ' + this.nativeElement.className;
      }
      else {
        this.nativeElement.className = this.getClassName();
      }
    };

    this.getClassName = function () {
      return 'label label-default';
    };
  };

  function ngxLabelPrimary() {
    ngxBootstrap.shallowCopy(this, new ngxLabel(), true);

    this.getClassName = function () {
      return 'label label-primary';
    };
  };

  function ngxLabelInfo() {
    ngxBootstrap.shallowCopy(this, new ngxLabel(), true);

    this.getClassName = function () {
      return 'label label-info';
    };
  };

  function ngxLabelSuccess() {
    ngxBootstrap.shallowCopy(this, new ngxLabel(), true);

    this.getClassName = function () {
      return 'label label-success';
    };
  };

  function ngxLabelWarning() {
    ngxBootstrap.shallowCopy(this, new ngxLabel(), true);

    this.getClassName = function () {
      return 'label label-warning';
    };
  };

  function ngxLabelDanger() {
    ngxBootstrap.shallowCopy(this, new ngxLabel(), true);

    this.getClassName = function () {
      return 'label label-danger';
    };
  };

})(window.ngxBootstrap);