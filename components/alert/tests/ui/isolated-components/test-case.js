import * as ngCore from '@angular/core';
import { ngxAnimationService } from '../../../../../cores';
import { NGX_LINK_DIRECTIVES } from '../../../../link';
import { ngxAlertService, NGX_ALERT_DIRECTIVES, NGX_ALERT_PROVIDERS } from '../../../../alert';

function _ngxTestCase() {
  this.constructor = [ngxAlertService, function (ngxAlertService) {
    this.ngxAlertService = ngxAlertService;

    this.href = 'https://translate.google.com.vn';
  }];

  this.ngAfterViewInit = function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxAlertService.show('myInfoAlert');
      _self.ngxAlertService.dismiss('mySuccessAlert');
    }, 2 * 1000);
  };

  this.showing = function (event) {
    console.log('showing', event);
  };

  this.shown = function (event) {
    console.log('shown', event);
  };

  this.dismissing = function (event) {
    console.log('dismissing', event);
  };

  this.dismissed = function (event) {
    console.log('dismissed', event);
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_LINK_DIRECTIVES,
    NGX_ALERT_DIRECTIVES
  ],
  providers: [
    ngxAnimationService,
    NGX_ALERT_PROVIDERS
  ]
})
.Class(new _ngxTestCase());