var ngxRenderService = require('renderService');
var ngxBaseComponent = require('baseComponent');

function _ngxCardComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function ngxLabelComponent(elementRef, ngxRenderService) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-card',
  template: require('./themes/' + __THEME__ + '/templates/card.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/card.scss')],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxCardComponent());