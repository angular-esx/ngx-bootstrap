(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxJumbotronServiceClass = ngxJumbotronService;
  ngxBootstrap.ngxComponents.ngxJumbotronService = ng.core.Class(new ngxJumbotronService());

  function ngxJumbotronService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxTypeService,
      function (ngxTypeService) {
        ngxBootstrap.shallowCopy(this, ngxTypeService);

        this.setPrefix('jumboron');
      }
    ];

    this.getFluidTypeClass = function () {
      return this.prefix + 'fluid';
    };

    this.combineType = function (type) {
      var _typeClass = this.getTypeClass(type);

      return _typeClass;
    };
  }

})(window.ngxBootstrap);