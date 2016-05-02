function _ngxHeaderComponent() {
  this.constructor = function () { };
}

module.exports = ng.core.Component({
  selector: 'ngx-header',
  template: '<div><ng-content></ng-content></div>'
})
.Class(new _ngxHeaderComponent());