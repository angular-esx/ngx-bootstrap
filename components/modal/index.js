import { ngxModalComponent } from './modal.component';
import { ngxModalHeaderComponent } from './modal-header.component';
import { ngxModalFooterComponent } from './modal-footer.component';
import { ngxModalService } from './services/modal.service';

export * from './modal.component';
export * from './modal-header.component';
export * from './modal-footer.component';
export * from './services/modal.service';

export var NGX_MODAL_DIRECTIVES = [ngxModalComponent, ngxModalHeaderComponent, ngxModalFooterComponent];

export var NGX_MODAL_PROVIDERS = [ngxModalService];