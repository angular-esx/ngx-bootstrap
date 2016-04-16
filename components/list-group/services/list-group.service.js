(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxListGroupServiceClass = ngxListGroupService;
  ngxBootstrap.ngxComponents.ngxListGroupService = ng.core.Class(new ngxListGroupService());

  function ngxListGroupService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxColorService,
      ngxBootstrap.ngxCores.ngxStateService,
      function (ngxColorService, ngxStateService) {
        ngxBootstrap.shallowCopy(this, ngxColorService);
        ngxBootstrap.shallowCopy(this, ngxStateService);

        this.setPrefix('list-group-item');
      }
    ];

    this.combineColor = function (type) {
      var _typeClass = this.getColorClass(type);

      return _typeClass;
    };

    this.isDisabledState = function (state) {
      return state && state === this.getStates().DISABLED;
    };

    this.isActiveState = function (state) {
      return state && state === this.getStates().ACTIVE;
    };
  }

})(window.ngxBootstrap);