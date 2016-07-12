var ngxRenderService = require('renderService');
var ngxBaseComponent = require('baseComponent');

function _ngxCardHeaderComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function ngxCardHeaderComponent(elementRef, ngxRenderService) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-card-header',
  template: require('./themes/' + __THEME__ + '/templates/card-header.html'),
  providers: [ngxRenderService]
})
.Class(new _ngxCardHeaderComponent());