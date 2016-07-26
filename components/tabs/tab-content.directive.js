function _ngxTabContentDirective() {
  var _base;

  this.extends = ngx.core.templatePortalDirective;

  this.constructor = [
    ng.core.TemplateRef,
    ng.core.ViewContainerRef,

    function ngxTabContentDirective(templateRef, viewContainerRef) {
      ngx.core.templatePortalDirective.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.templatePortalDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'template[ngx-tab-content]'
})
.Class(new _ngxTabContentDirective());