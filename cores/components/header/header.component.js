var ngxHeaderComponent = ng.core.Component({
  selector: 'ngx-header',
  template: '<ng-content></ng-content>'
})
.Class(new _ngxHeader());

function _ngxHeader() {
  this.constructor = function () { };
}

module.exports = ngxHeaderComponent;