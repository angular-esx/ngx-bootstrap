var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxProgressComponent() {
  var _base;
  var _PROPERTIES = {
    VALUE: 'value',
    MAX: 'max'
  };

  this.extends = ngxCore.baseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxProgressComponent(elementRef, renderer) {
      ngxCore.baseComponent.apply(this, arguments);
      
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

    if(ngxUtil.isEmpty(this.value)){ 
      this.value = 0;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.VALUE, this.value);
     }

    if(ngxUtil.isEmpty(this.max)){ 
      this.max = 100;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.MAX, this.max);
     }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-progress';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-progress',
  template: require('./themes/' + __THEME__ + '/templates/progress.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/progress.scss')],
  properties: ['color', 'value', 'max', 'initCssClass:class'],
  host: {
    '[class.ngx-progress]': 'true'
  }
})
.Class(new _ngxProgressComponent());