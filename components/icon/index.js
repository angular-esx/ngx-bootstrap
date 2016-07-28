var ngxIconComponent = require('./icon.component.js');
var ngxIconService = require('./services/icon.service.js');

module.exports = {
  iconComponent: ngxIconComponent,
  iconService: ngxIconService,
  ICON_DIRECTIVES: [ngxIconComponent],
  ICON_PROVIDERS: [ngxIconService]
};