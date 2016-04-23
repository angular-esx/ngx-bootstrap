(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxLabelService = ng.core.Class(new _ngxLabelService());

  function _ngxLabelService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxTypeService,

      function (ngxColorService, ngxTypeService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);
        ngxBootstrap.shallowCopy(this, ngxTypeService);

        this.prefixClass = 'ngxLabel';
      }
    ];

    this.getPillTypeClass = function () {
      return  this.prefixClass + '-pill';
    };
  }

})(window.ngxBootstrap);