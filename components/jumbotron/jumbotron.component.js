function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = ngx.core.baseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxJumbotronComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-jumbotron';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-jumbotron',
  template: require('./themes/' + __THEME__ + '/templates/jumbotron.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/jumbotron.scss')],
  properties: ['initCssClass:class']
})
.Class(new _ngxJumbotronComponent());