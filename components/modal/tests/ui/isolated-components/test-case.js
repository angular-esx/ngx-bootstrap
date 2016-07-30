var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../../../../cores/index.js');
var ngxButton = require('../../../../button/index.js');
var ngxBackdrop = require('../../../../backdrop/index.js');
var ngxModal = require('../../../../modal/index.js');

function _testCase() {
  this.constructor = [
    ngCore.ViewContainerRef,
    ngxModal.modalService,
    ngxBackdrop.backdropService,

    function (viewContainerRef, ngxModalService, backdropService) {
      this.ngxModalService = ngxModalService;
      this.childComponent = new ngxCore.componentPortalClass(_buildNgxChildComponent());

      backdropService.setRootViewContainerRef(viewContainerRef);
    }
  ];

  this.showModal = function (modalId) {
    this.ngxModalService.show(modalId);
  };

  this.hideModal = function (modalId) {
    this.ngxModalService.hide(modalId);
  };

  function _buildNgxChildComponent() {
    return ngCore.Component({
      selector: 'ngx-child-component',
      template: [
        '<h1>Child Component</h1>',
        '<br/><br/>',
        '<h3>This is content of child component</h3>'
      ].join(' '),
    })
    .Class(new _ngxChildComponent());
  }

  function _ngxChildComponent() {
    this.constructor = function ngxChildComponent() { };
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/modal/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxCore.portalHostDirective,
    ngxButton.BUTTON_DIRECTIVES,
    ngxBackdrop.BACKDROP_DIRECTIVES,
    ngxModal.MODAL_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxBackdrop.BACKDROP_PROVIDERS,
    ngxModal.MODAL_PROVIDERS
  ]
})
.Class(new _testCase());