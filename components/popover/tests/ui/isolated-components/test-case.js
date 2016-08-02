import * as ngCore from '@angular/core';
import rx from 'rxjs/rx.js';
import ngxAnimationService from '../../../../../cores';
import { ngxPopoverService, NGX_POPOVER_DIRECTIVES, NGX_POPOVER_PROVIDERS } from '../../../../popover';

function _ngxTestCase() {
  this.constructor = [ngxPopoverService, function (ngxPopoverService) {
    this.ngxPopoverService = ngxPopoverService;

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');

    this.ngxPopoverService.toggle('myPopoverWithTemplate');
  };

  this.togglePopover = function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      rx.Observable.zip
      (
        this.ngxPopoverService.getToggle$('myPopover'),
        this.ngxPopoverService.getEnable$('myPopover', false),
        function (toggleEvent, enableEvent) {
          return [toggleEvent, enableEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxPopoverService.next(event);
      });
    }
    else {
      this.toggled = true;

      rx.Observable.zip
      (
        this.ngxPopoverService.getEnable$('myPopover', true),
        this.ngxPopoverService.getToggle$('myPopover'),
        function (enableEvent, toggleEvent) {
          return [enableEvent, toggleEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxPopoverService.next(event);
      });
    }
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/popover/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_POPOVER_DIRECTIVES
  ],
  providers: [
    ngxAnimationService,
    NGX_POPOVER_PROVIDERS,
  ]
})
.Class(new _ngxTestCase());