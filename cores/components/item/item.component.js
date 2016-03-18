(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxItemClass = ngxItem;

  ngxBootstrap.ngxCores.ngxItemComponent = ng.core.Component({
    selector: 'ngx-item',
    template: '<ng-content></ng-content>'
  })
  .Class(new ngxItem());

  function ngxItem() {
    this.constructor = function () { };
  }

})(window.ngxBootstrap);