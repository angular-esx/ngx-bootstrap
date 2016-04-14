(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxListGroupServiceClass = ngxListGroupService;
  ngxBootstrap.ngxComponents.ngxListGroupService = ng.core.Class(new ngxListGroupService());

  function ngxListGroupService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      function (ngxColorService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);

        this.setPrefix('list-group-item');
      }
    ];

    this.getFluidTypeClass = function () {
      return this.prefix + 'fluid';
    };

    this.combineColor = function (type) {
      var _typeClass = this.getColorClass(type);

      return _typeClass;
    };
  }

})(window.ngxBootstrap);