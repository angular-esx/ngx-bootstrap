var ngCore = require('@angular/core/index.js');

function _ngxModalFooterComponent() {
  this.constructor = function ngxModalFooterComponent() { };
}

module.exports = ngCore.Component({
  selector: 'ngx-modal-footer',
  template: require('./themes/' + __THEME__ + '/templates/modal-footer.html'),
  host: {
    '[class.ngx-modal-footer]': 'true'
  }
})
.Class(new _ngxModalFooterComponent());