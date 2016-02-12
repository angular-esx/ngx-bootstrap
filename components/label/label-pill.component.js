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
    var _ngxLabel = new ngxBootstrap.ngxClass.ngxLabelClass();
    ngxBootstrap.getRootInstance(_ngxLabel).getClassName = function () {
      return 'label label-pill label-default';
    };

    ngxBootstrap.inherit(this, _ngxLabel, true);
  };

  function ngxLabelPillPrimary() {
    var _ngxLabelPill = new ngxLabelPill();
    ngxBootstrap.getRootInstance(_ngxLabelPill).getClassName = function () {
      return 'label label-pill label-primary';
    };

    ngxBootstrap.inherit(this, _ngxLabelPill, true);
  };

  function ngxLabelPillInfo() {
    var _ngxLabelPill = new ngxLabelPill();
    ngxBootstrap.getRootInstance(_ngxLabelPill).getClassName = function () {
      return 'label label-pill label-info';
    };

    ngxBootstrap.inherit(this, _ngxLabelPill, true);
  };

  function ngxLabelPillSuccess() {
    var _ngxLabelPill = new ngxLabelPill();
    ngxBootstrap.getRootInstance(_ngxLabelPill).getClassName = function () {
      return 'label label-pill label-success';
    };

    ngxBootstrap.inherit(this, _ngxLabelPill, true);
  };

  function ngxLabelPillWarning() {
    var _ngxLabelPill = new ngxLabelPill();
    ngxBootstrap.getRootInstance(_ngxLabelPill).getClassName = function () {
      return 'label label-pill label-warning';
    };

    ngxBootstrap.inherit(this, _ngxLabelPill, true);
  };

  function ngxLabelPillDanger() {
    var _ngxLabelPill = new ngxLabelPill();
    ngxBootstrap.getRootInstance(_ngxLabelPill).getClassName = function () {
      return 'label label-pill label-danger';
    };

    ngxBootstrap.inherit(this, _ngxLabelPill, true);
  };

})(window.ngxBootstrap);