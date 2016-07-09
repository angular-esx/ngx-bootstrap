var ngxListItemService = require('components/list/services/list-item.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');

function _ngxListItemComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxListItemService,

    function ngxListItemComponent(elementRef, ngxRenderService, ngxListItemService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxListItemService = ngxListItemService;
        this.clickEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.click = function (event) {
    if (this.ngxListItemService.isDisabledStateClass(this.getPrefixClass(), this.state)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  };

  this.getPrefixClass = function () {
    return this.prefixClass && this.prefixClass != 'a' ? this.prefixClass : 'ngx-list-item';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-list-item, a[ngx-list-item]',
  template: require('./themes/' + __THEME__ + '/templates/list-item.html'),
  providers: [ngxRenderService],
  properties: ['color', 'state', 'prefixClass:prefix-class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxListItemComponent());