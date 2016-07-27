var ngxModalComponent = require('./modal.component.js');

function _ngxModalHeaderComponent() {
  this.constructor = [
    ngxModalComponent,

    function ngxModalHeaderComponent(ngxModal) {
      this.ngxModal = ngxModal;
    }
  ];

  this.hide = function () {
    this.ngxModal.hide();
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-modal-header',
  template: require('./themes/' + __THEME__ + '/templates/modal-header.html'),
  host: {
    '[class.ngx-modal-header]': 'true'
  }
})
.Class(new _ngxModalHeaderComponent());