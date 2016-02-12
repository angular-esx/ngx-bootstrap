(function (ngxBootstrap, fileService) {
  ngxBootstrap.ngxClass.ngxBreadcrumbItemClass = breadcrumbItem;

  ngxBootstrap.ngxComponents.ngxBreadcrumbItemComponent = ng.core.Component({
    selector: 'ngx-item',
    properties: ['itemHref: href', 'itemName: name'],
    template: '<a href="{{itemHref}}">{{itemName}}</a>'
  })
  .Class(new breadcrumbItem());

  function breadcrumbItem() {
    this.constructor = function () {};
  }

})(window.ngxBootstrap, ngxBootstrap.configs.fileService);