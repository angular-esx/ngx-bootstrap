var ngCores = require('@angular/core/index.js');

function _ngxTranscludeDirective() {
  var _ATTRIBUTES = {
    TEMPLATE_REF: 'templateRef'
  };

  this.constructor = [
    ngCores.ViewContainerRef,

    function ngxTranscludeDirective(viewContainerRef) {
      this.viewContainerRef = viewContainerRef;
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if (changeRecord[_ATTRIBUTES.TEMPLATE_REF]) {
      this.viewContainerRef.createEmbeddedView(changeRecord[_ATTRIBUTES.TEMPLATE_REF].currentValue);
    }
  };
}

module.exports = ngCores.Directive({
  selector: '[ngxTransclude]',
  properties: ['templateRef:ngxTransclude']
})
.Class(new _ngxTranscludeDirective());