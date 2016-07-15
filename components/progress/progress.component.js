var ngxBaseComponent = require('baseComponent');

function _ngxProgressComponent() {
  var _base;
  var _PROPERTIES = {
    VALUE: 'value',
    MAX: 'max'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxProgressComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.currentProgress = 0;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _self = this;
    setTimeout(function () {
      _self.currentProgress = (_self.value / _self.max) * 100;
    });

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.initDefaultValues = function(){
    var _changeRecord;

    if(!this.value){ 
      this.value = 0;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.VALUE, this.value);
     }

    if(!this.max){ 
      this.max = 100;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.MAX, this.max);
     }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-progress';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-progress',
  template: require('./themes/' + __THEME__ + '/templates/progress.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/progress.scss')],
  properties: ['color', 'value', 'max', 'initCssClass:class'],
  host: {
    '[class.ngx-progress]': 'true'
  }
})
.Class(new _ngxProgressComponent());