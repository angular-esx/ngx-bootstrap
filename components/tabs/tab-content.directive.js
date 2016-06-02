var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxTabContentDirective() {
  this.constructor = [
    ng.core.TemplateRef,

    function ngxTabContentDirective(templateRef) {
      this.templateRef = templateRef;
    }
  ];
}

module.exports = ng.core.Directive({
  selector: 'template[ngx-tab-content]'
})
.Class(new _ngxTabContentDirective());