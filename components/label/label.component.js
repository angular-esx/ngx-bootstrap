var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');

function _ngxLabelComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxLabelComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function(){
    return 'ngx-label';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-label',
  template: require('./themes/' + __THEME__ + '/templates/label.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/label.scss')],
  properties: ['color', 'type']
})
.Class(new _ngxLabelComponent());