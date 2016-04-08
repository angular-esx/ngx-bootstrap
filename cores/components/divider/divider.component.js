(function (ngxBootstrap) {
  ngxBootstrap.ngxCores.ngxDividerComponent = ng.core.Directive({
    selector: 'ngx-divider',
  })
  .Class(new _ngxDivider());

  function _ngxDivider() {
    this.constructor = function () { };
  }

})(window.ngxBootstrap);