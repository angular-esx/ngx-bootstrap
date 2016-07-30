var ngxModalComponent = require('./modal.component.js');
var ngxModalHeaderComponent = require('./modal-header.component.js');
var ngxModalFooterComponent = require('./modal-footer.component.js');
var ngxModalService = require('./services/modal.service.js');

module.exports = {
  modalComponent: ngxModalComponent,
  modalHeaderComponent: ngxModalHeaderComponent,
  modalFooterComponent: ngxModalFooterComponent,
  modalService: ngxModalService,
  MODAL_DIRECTIVES: [ngxModalComponent, ngxModalHeaderComponent, ngxModalFooterComponent],
  MODAL_PROVIDERS: [ngxModalService]
};