function _ngxBreadcumbItemService() {
  this.constructor = function (ngxStateService) {
    this.prefixClass = 'ngx-breadcrumb-item';
  };
}

module.exports = ng.core.Class(new _ngxBreadcumbItemService());