import * as ngCore from '@angular/core';
import { ngxAnimationService, ngxComponentPortal, ngxPortalHostDirective } from '../../../../../cores';
import { ngxBackdropService, NGX_BACKDROP_DIRECTIVES, NGX_BACKDROP_PROVIDERS } from '../../../../backdrop';
import { ngxModalService, NGX_MODAL_DIRECTIVES, NGX_MODAL_PROVIDERS } from '../../../../modal';
import { NGX_BUTTON_DIRECTIVES } from '../../../../button';

function _ngxTestCase() {
  this.constructor = [
    ngCore.ViewContainerRef,
    ngxModalService,
    ngxBackdropService,

    function (viewContainerRef, ngxModalService, backdropService) {
      this.ngxModalService = ngxModalService;
      this.childComponent = new ngxComponentPortal(_buildNgxChildComponent());

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

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    ngxPortalHostDirective,
    NGX_BUTTON_DIRECTIVES,
    NGX_BACKDROP_DIRECTIVES,
    NGX_MODAL_DIRECTIVES
  ],
  providers: [
    ngxAnimationService,
    NGX_BACKDROP_PROVIDERS,
    NGX_MODAL_PROVIDERS
  ]
})
.Class(new _ngxTestCase());