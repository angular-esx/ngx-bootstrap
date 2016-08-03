import * as ngCore from '@angular/core';
import { NGX_GROUP_DIRECTIVES } from '../../../../group';
import { NGX_BUTTON_DIRECTIVES } from '../../../../button';
import { NGX_LINK_DIRECTIVES } from '../../../../link';
import { ngxDropMenuService, NGX_DROPMENU_DIRECTIVES, NGX_DROPMENU_PROVIDERS } from '../../../../drop-menu';

function _ngxTestCase() {
  this.constructor = [ngxDropMenuService, function (ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;

    this.href = 'https://translate.google.com.vn';
  }];

  this.alert = function (id) {
    alert('You have just clicked ' + id);
  };

  this.toggleDropdown = function (id) {
    this.ngxDropMenuService.toggleDropdown(id);
  };

  this.toggleDropup = function (id) {
    this.ngxDropMenuService.toggleDropup(id);
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_GROUP_DIRECTIVES,
    NGX_BUTTON_DIRECTIVES,
    NGX_LINK_DIRECTIVES,
    NGX_DROPMENU_DIRECTIVES
  ],
  providers: [
   NGX_DROPMENU_PROVIDERS
  ]
})
.Class(new _ngxTestCase());