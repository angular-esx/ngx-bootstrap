function _ngxBreadcumbItemService() {
  this.constructor = function ngxBreadcumbItemService(ngxStateService) {
    this.prefixClass = 'ngx-breadcrumb-item';
  };
}

module.exports = ng.core.Class(new _ngxBreadcumbItemService());