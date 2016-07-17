function _breadcrumbComponent() {
  var _base;
  
  this.extends = ngx.core.baseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function breadcrumbComponent(elementRef, renderer) {
      ngx.core.baseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-breadcrumb';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngx.core.baseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-breadcrumb',
  template: require('./themes/' + __THEME__ + '/templates/breadcrumb.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/breadcrumb.scss')],
  properties: ['color', 'initCssClass:class']
})
.Class(new _breadcrumbComponent());