﻿function _testCase() {
  this.constructor = [ngx.icon.iconService, function (ngxIconService) {
    ngxIconService.setDefaultFontSet('material-icons');

    ngxIconService.setSvgIcon('components/icon/tests/ui/isolated-components/svgs/favorite.svg', 'favorite');

    ngxIconService.setSvgIcon('components/icon/tests/ui/isolated-components/svgs/face.svg', 'face', 'face-set');

    ngxIconService.setSvgIconSet('components/icon/tests/ui/isolated-components/svgs/material-set.svg');

    this.svg_face = 'components/icon/tests/ui/isolated-components/svgs/face.svg';
  }];
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/icon/tests/ui/isolated-components/test-case.html',
  styleUrls: [
    'components/icon/tests/ui/isolated-components/fonts/awesome/font.css',
    'components/icon/tests/ui/isolated-components/fonts//material/font.css'
  ],
  encapsulation: ng.core.ViewEncapsulation.None,
  directives: [
    ngx.icon.DIRECTIVES
  ],
  providers: [
    ngx.icon.PROVIDERS,
    ng.http.HTTP_PROVIDERS
  ]
})
.Class(new _testCase());