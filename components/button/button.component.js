var ngxBaseComponent = require('baseComponent');

function _ngxButtonComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxButtonComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.clickEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.ngOnChanges = function(changeRecord){
    this.isDisabled = this.propertyHasValue(this.getStyleProperties().STATE, 'disabled');

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.initDefaultValues = function(){
    if(!this.state && !this.isDisabled){ this.isDisabled = false; }

    return null;
  };

  this.getPrefixClass = function () {
    return 'ngx-button';
  };

  this.click = function (event) {
    if (this.isDisabled) {
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
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxButtonComponent());