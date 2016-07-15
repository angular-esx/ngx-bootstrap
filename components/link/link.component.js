var ngxBaseComponent = require('baseComponent');

function _ngxLinkComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxLinkComponent(elementRef, renderer) {
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
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if(!this.color){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    if(!this.state && !this.isDisabled){ this.isDisabled = false; }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-link';
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

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'a[ngx-link]',
  template: require('./themes/' + __THEME__ + '/templates/link.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/link.scss')],
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxLinkComponent());