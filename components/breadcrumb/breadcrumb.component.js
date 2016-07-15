(function (ngxBootstrap, fileService) {
  ngxBootstrap.ngxClass.ngxBreadcrumbClass = breadcrumb;

  ngxBootstrap.ngxComponents.ngxBreadcrumbComponent = ng.core.Component({
    selector: 'ngx-breadcrumb',
    template: '<ng-content></ng-content>'
  })
  .Class(new breadcrumb());

  function breadcrumb() {
    this.constructor = function () { };
  }

})(window.ngxBootstrap, ngxBootstrap.configs.fileService);