var ngxCollapseService = require('./services/collapse.service.js');

function _ngxToggleCollapseDirective() {
  this.constructor = [
    ngxCollapseService,

    function ngxToggleCollapseDirective(ngxCollapseService) {
      this.ngxCollapseService = ngxCollapseService;
    }
  ];

  this.toggle = function () {
    this.ngxCollapseService.toggle(this.id);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-collapse]',
  properties: ['id: ngx-toggle-collapse'],
  host: {
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleCollapseDirective());