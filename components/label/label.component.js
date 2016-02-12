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
    var _nativeElement;

    this.constructor = [ng.core.ElementRef, function (elementRef) {
      this.onConstructing(elementRef);
    }];

    this.onConstructing = function (elementRef) {
      _nativeElement = elementRef.nativeElement;
    };

    this.ngAfterViewInit = function () {
      if (_nativeElement.className) {
        _nativeElement.className = this.getClassName() + ' ' + _nativeElement.className;
      }
      else {
      _nativeElement.className = this.getClassName();
      }
    };

    this.getClassName = function () {
      return 'label label-default';
    };
  };

  function ngxLabelPrimary() {
    var _ngxLabel = new ngxLabel();
    ngxBootstrap.getRootInstance(_ngxLabel).getClassName = function () {
      return 'label label-primary';
    };

    ngxBootstrap.inherit(this, _ngxLabel, true);
  };

  function ngxLabelInfo() {
    var _ngxLabel = new ngxLabel();
    ngxBootstrap.getRootInstance(_ngxLabel).getClassName = function () {
      return 'label label-info';
    };

    ngxBootstrap.inherit(this, _ngxLabel, true);
  };

  function ngxLabelSuccess() {
    var _ngxLabel = new ngxLabel();
    ngxBootstrap.getRootInstance(_ngxLabel).getClassName = function () {
      return 'label label-success';
    };

    ngxBootstrap.inherit(this, _ngxLabel, true);
  };

  function ngxLabelWarning() {
    var _ngxLabel = new ngxLabel();
    ngxBootstrap.getRootInstance(_ngxLabel).getClassName = function () {
      return 'label label-warning';
    };

    ngxBootstrap.inherit(this, _ngxLabel, true);
  };

  function ngxLabelDanger() {
    var _ngxLabel = new ngxLabel();
    ngxBootstrap.getRootInstance(_ngxLabel).getClassName = function () {
      return 'label label-danger';
    };

    ngxBootstrap.inherit(this, _ngxLabel, true);
  };

})(window.ngxBootstrap);