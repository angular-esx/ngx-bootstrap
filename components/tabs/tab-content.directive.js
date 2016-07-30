var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');

function _ngxTabContentDirective() {
  var _base;

  this.extends = ngxCore.templatePortalDirective;

  this.constructor = [
    ngCore.TemplateRef,
    ngCore.ViewContainerRef,

    function ngxTabContentDirective(templateRef, viewContainerRef) {
      ngxCore.templatePortalDirective.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.templatePortalDirective); }
    return _base;
  }
}

module.exports = ngCore.Directive({
  selector: 'template[ngx-tab-content]'
})
.Class(new _ngxTabContentDirective());