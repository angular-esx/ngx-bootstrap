var ngCore = require('@angular/core/index.js');

function _ngxTabContentDirective() {
  this.constructor = [
    ngCore.TemplateRef,

    function ngxTabContentDirective(templateRef) {
      this.templateRef = templateRef;
    }
  ];
}

module.exports = ngCore.Directive({
  selector: 'template[ngx-tab-content]'
})
.Class(new _ngxTabContentDirective());