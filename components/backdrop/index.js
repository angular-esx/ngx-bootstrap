import ngxBackdropComponent from './backdrop.component';
import ngxBackdropObserver from './services/backdrop.observer';
import ngxBackdropService from './services/backdrop.service';

export * from './backdrop.component';
export * from './services/backdrop.observer';
export * from './services/backdrop.service';

export var NGX_BACKDROP_DIRECTIVES = [ngxBackdropComponent];
export var NGX_BACKDROP_PROVIDERS = [ngxBackdropObserver, ngxBackdropService];