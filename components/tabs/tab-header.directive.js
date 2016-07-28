var ngCore = require('@angular/core/index.js');

function _ngxTabHeaderDirective() {
  this.constructor = [
    ngCore.TemplateRef,

    function ngxTabHeaderDirective(templateRef) {
      this.templateRef = templateRef;
    }
  ];
}

module.exports = ngCore.Directive({
  selector: 'template[ngx-tab-header]'
})
.Class(new _ngxTabHeaderDirective());