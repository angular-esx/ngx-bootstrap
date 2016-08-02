import * as ngCore from '@angular/core';
import ngxModalComponent from  './modal.component';

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

export var ngxModalHeaderComponent = ngCore.Component({
  selector: 'ngx-modal-header',
  templateUrl: './templates/modal-header.html',
  host: {
    '[class.ngx-modal-header]': 'true'
  }
})
.Class(new _ngxModalHeaderComponent());