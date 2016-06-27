var ngxLinkService = require('./services/link.service.js');
var ngxRenderService = require('renderService');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('utils');

function _ngxLinkComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLinkService,

    function ngxLinkComponent(elementRef, ngxRenderService, ngxLinkService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxLinkService = ngxLinkService;
        this.clickEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-link';
  };

  this.click = function (event) {
    if (this.ngxLinkService.isDisabledStateClass(this.getPrefixClass(), this.state)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'a[ngx-link]',
  template: require('./themes/' + __THEME__ + '/templates/link.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/link.scss')],
  providers: [ngxRenderService],
  properties: ['color', 'size', 'state', 'prefixClass:prefix-class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxLinkComponent());