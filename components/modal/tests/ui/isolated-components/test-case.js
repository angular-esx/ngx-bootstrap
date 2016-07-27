function _testCase() {
  this.constructor = [
    ng.core.ViewContainerRef,
    ngx.modal.modalService,
    ngx.backdrop.backdropService,

    function (viewContainerRef, ngxModalService, backdropService) {
      this.ngxModalService = ngxModalService;
      this.childComponent = new ngx.core.componentPortalClass(_buildNgxChildComponent());

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
    return ng.core.Component({
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

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/modal/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.core.portalHostDirective,
    ngx.button.DIRECTIVES,
    ngx.backdrop.DIRECTIVES,
    ngx.modal.DIRECTIVES
  ],
  providers: [
    ngx.core.animationService,
    ngx.backdrop.PROVIDERS,
    ngx.modal.PROVIDERS
  ]
})
.Class(new _testCase());