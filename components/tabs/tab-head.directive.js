function _ngxTabHeaderDirective() {
  this.constructor = [
    ng.core.TemplateRef,

    function ngxTabHeaderDirective(templateRef) {
      this.templateRef = templateRef;
    }
  ];
}

module.exports = ng.core.Directive({
  selector: 'template[ngx-tab-head]'
})
.Class(new _ngxTabHeaderDirective());