var ngxButtonService = require('./services/button.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

function _ngxButtonComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxButtonService,

    function ngxButtonComponent(elementRef, ngxRenderService, ngxButtonService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxButtonService = ngxButtonService;
        this.clickEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.getPrefixClass = function () {
    return this.prefixClass && this.prefixClass != 'a' ? this.prefixClass : 'ngx-button';
  };

  this.click = function (event) {
    if (this.ngxButtonService.isDisabledStateClass(this.getPrefixClass(), this.state)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  };
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-button, a[ngx-button]',
  template: require('./themes/' + __THEME__ + '/templates/button.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/button.scss')],
  providers:[ngxRenderService],
  properties: ['color', 'size', 'state', 'prefixClass:prefix-class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxButtonComponent());