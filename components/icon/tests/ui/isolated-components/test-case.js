var ngCore = require('@angular/core/index.js');
var ngHttp = require('@angular/http/index.js');
var ngxIcon = require('../../../../icon/index.js');

function _testCase() {
  this.constructor = [ngxIcon.iconService, function (ngxIconService) {
    ngxIconService.setDefaultFontSet('material-icons');

    ngxIconService.setSvgIcon('components/icon/tests/ui/isolated-components/svgs/favorite.svg', 'favorite');

    ngxIconService.setSvgIcon('components/icon/tests/ui/isolated-components/svgs/face.svg', 'face', 'face-set');

    ngxIconService.setSvgIconSet('components/icon/tests/ui/isolated-components/svgs/material-set.svg');

    this.svg_face = 'components/icon/tests/ui/isolated-components/svgs/face.svg';
  }];
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/icon/tests/ui/isolated-components/test-case.html',
  styleUrls: [
    'components/icon/tests/ui/isolated-components/fonts/awesome/font.css',
    'components/icon/tests/ui/isolated-components/fonts//material/font.css'
  ],
  encapsulation: ngCore.ViewEncapsulation.None,
  directives: [
    ngxIcon.ICON_DIRECTIVES
  ],
  providers: [
    ngxIcon.ICON_PROVIDERS,
    ngHttp.HTTP_PROVIDERS
  ]
})
.Class(new _testCase());