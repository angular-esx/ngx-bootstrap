var ngx = require('ngx');
var ngxModalComponent = require('./modal.component.js');
var ngxModalHeaderComponent = require('./modal-header.component.js');
var ngxModalFooterComponent = require('./modal-footer.component.js');
var ngxModalService = require('./services/modal.service.js');

ngx.modal = {
  modalComponent: ngxModalComponent,
  modalHeaderComponent: ngxModalHeaderComponent,
  modalFooterComponent: ngxModalFooterComponent,
  modalService: ngxModalService,
  DIRECTIVES: [ngxModalComponent, ngxModalHeaderComponent, ngxModalFooterComponent],
  PROVIDERS: [ngxModalService]
};

module.exports = ngx;