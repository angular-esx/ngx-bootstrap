import * as ngCore from '@angular/core';
import * as rx from 'rxjs/rx';
import { ngxAnimationService } from '../../../../../cores';
import { ngxTooltipService, NGX_TOOLTIP_DIRECTIVES, NGX_TOOLTIP_PROVIDERS } from '../../../../tooltip';

function _ngxTestCase() {
  this.constructor = [ngxTooltipService, function (ngxTooltipService) {
    this.ngxTooltipService = ngxTooltipService;

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');
    
    this.ngxTooltipService.hide('myTooltipWithTemplate');
  };

  this.toggleTooltip = function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      rx.Observable.zip
      (
        this.ngxTooltipService.getHide$('myTooltip'),
        this.ngxTooltipService.getEnable$('myTooltip', false),
        function (hideEvent, enableEvent) {
          return [hideEvent, enableEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxTooltipService.next(event);
      });
    }
    else {
      this.toggled = true;

      rx.Observable.zip
      (
        this.ngxTooltipService.getEnable$('myTooltip', true),
        this.ngxTooltipService.getShow$('myTooltip'),
        function (enableEvent, showEvent) {
          return [enableEvent, showEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxTooltipService.next(event);
      });
    }
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_TOOLTIP_DIRECTIVES
  ],
  providers: [
    ngxAnimationService,
    NGX_TOOLTIP_PROVIDERS
  ]
})
.Class(new _ngxTestCase());