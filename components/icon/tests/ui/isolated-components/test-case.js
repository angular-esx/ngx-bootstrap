import * as ngCore from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ngxIconService, NGX_ICON_DIRECTIVES, NGX_ICON_PROVIDERS } from '../../../../icon';

function _ngxTestCase() {
  this.constructor = [ngxIconService, function (ngxIconService) {
    ngxIconService.setDefaultFontSet('material-icons');

    ngxIconService.setSvgIcon('components/icon/tests/ui/isolated-components/svgs/favorite.svg', 'favorite');

    ngxIconService.setSvgIcon('components/icon/tests/ui/isolated-components/svgs/face.svg', 'face', 'face-set');

    ngxIconService.setSvgIconSet('components/icon/tests/ui/isolated-components/svgs/material-set.svg');

    this.svg_face = 'components/icon/tests/ui/isolated-components/svgs/face.svg';
  }];
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  encapsulation: ngCore.ViewEncapsulation.None,
  directives: [
    NGX_ICON_DIRECTIVES
  ],
  providers: [
    HTTP_PROVIDERS,
    NGX_ICON_PROVIDERS
  ]
})
.Class(new _ngxTestCase());