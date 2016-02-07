(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelPillClass = ngxLabelPill;
  ngxBootstrap.ngxClass.ngxLabelPillPrimaryClass = ngxLabelPillPrimary;
  ngxBootstrap.ngxClass.ngxLabelPillInfoClass = ngxLabelPillInfo;
  ngxBootstrap.ngxClass.ngxLabelPillSuccessClass = ngxLabelPillSuccess;
  ngxBootstrap.ngxClass.ngxLabelPillWarningClass = ngxLabelPillWarning;
  ngxBootstrap.ngxClass.ngxLabelPillDangerClass = ngxLabelPillDanger;

  ngxBootstrap.ngxComponents.ngxLabelPillComponent = ng.core.Directive({
    selector: 'ngx-label-pill',
  })
  .Class(new ngxLabelPill());

  ngxBootstrap.ngxComponents.ngxLabelPillPrimaryComponent = ng.core.Directive({
    selector: 'ngx-label-pill-primary',
  })
  .Class(new ngxLabelPillPrimary());

  ngxBootstrap.ngxComponents.ngxLabelPillInfoComponent = ng.core.Directive({
    selector: 'ngx-label-pill-info',
  })
  .Class(new ngxLabelPillInfo());

  ngxBootstrap.ngxComponents.ngxLabelPillSuccessComponent = ng.core.Directive({
    selector: 'ngx-label-pill-success',
  })
  .Class(new ngxLabelPillSuccess());

  ngxBootstrap.ngxComponents.ngxLabelPillWarningComponent = ng.core.Directive({
    selector: 'ngx-label-pill-warning',
  })
  .Class(new ngxLabelPillWarning());

  ngxBootstrap.ngxComponents.ngxLabelPillDangerComponent = ng.core.Directive({
    selector: 'ngx-label-pill-danger',
  })
  .Class(new ngxLabelPillDanger());


  function ngxLabelPill() {
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
      return 'label label-pill label-default';
    };
  };

  function ngxLabelPillPrimary() {
    ngxBootstrap.shallowCopy(this, new ngxLabelPill(), true);

    this.getClassName = function () {
      return 'label label-pill label-primary';
    };
  };

  function ngxLabelPillInfo() {
    ngxBootstrap.shallowCopy(this, new ngxLabelPill(), true);

    this.getClassName = function () {
      return 'label label-pill label-info';
    };
  };

  function ngxLabelPillSuccess() {
    ngxBootstrap.shallowCopy(this, new ngxLabelPill(), true);

    this.getClassName = function () {
      return 'label label-pill label-success';
    };
  };

  function ngxLabelPillWarning() {
    ngxBootstrap.shallowCopy(this, new ngxLabelPill(), true);

    this.getClassName = function () {
      return 'label label-pill label-warning';
    };
  };

  function ngxLabelPillDanger() {
    ngxBootstrap.shallowCopy(this, new ngxLabelPill(), true);

    this.getClassName = function () {
      return 'label label-pill label-danger';
    };
  };

})(window.ngxBootstrap);