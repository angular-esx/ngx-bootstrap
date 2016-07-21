function _ngxLabelComponent() {
  var _base;

  this.extends = ngx.core.baseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxLabelComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];

  this.initDefaultValues = function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if(ngx.isEmpty(this.color)){ 
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

     return _changeRecord;
  };

  this.getPrefixClass = function(){
    return 'ngx-label';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-label',
  template: require('./themes/' + __THEME__ + '/templates/label.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/label.scss')],
  properties: ['color', 'type', 'initCssClass:class']
})
.Class(new _ngxLabelComponent());