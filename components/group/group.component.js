var ngxGroupService = require('./services/group.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');

function _ngxGroupComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxGroupService,

    function ngxGroupComponent(elementRef, ngxRenderService, ngxGroupService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxGroupService = ngxGroupService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-group',
  template: require('./themes/' + __THEME__ + '/templates/group.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/group.scss')],
  providers: [ngxRenderService],
  properties: ['type', 'size', 'prefixClass:prefix-class']
})
.Class(new _ngxGroupComponent());