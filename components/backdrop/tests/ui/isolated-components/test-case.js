import * as ngCore from '@angular/core';
import ngxAnimationService from '../../../../../cores';
import NGX_BUTTON_DIRECTIVES from '../../../../button';
import { ngxBackdropService, NGX_BACKDROP_DIRECTIVES, NGX_BACKDROP_PROVIDERS } from '../../../../backdrop';

function _ngxTestCase() {
  this.constructor = [
    ngCore.ViewContainerRef,
    ngxBackdropService,

    function (viewContainerRef, ngxBackdropService) {
      this.ngxBackdropService = ngxBackdropService;
      ngxBackdropService.setRootViewContainerRef(viewContainerRef);
    }
  ];

  this.ngOnInit = function () {
    var _self = this;

    this.subscription = this.ngxBackdropService.onClick(function (event) {
      if (event.isActive) {
        _self.ngxBackdropService.hide();
      }
    });
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }
  };

  this.onClick = function () {
    this.ngxBackdropService.show();
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/backdrop/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_BUTTON_DIRECTIVES,
    NGX_BACKDROP_DIRECTIVES
  ],
  providers: [
    ngxAnimationService,
    NGX_BACKDROP_PROVIDERS
  ]
})
.Class(new _ngxTestCase());