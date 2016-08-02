import ngxAlertComponent from './alert.component';
import ngxAlertLinkDirective from './alert-link.directive';
import ngxAlertService from './services/alert.service';

export * from './alert.component';
export * from './alert-link.directive';
export * from './services/alert.service';

export var NGX_ALERT_DIRECTIVES = [ngxAlertComponent, ngxAlertLinkDirective];
export var NGX_ALERT_PROVIDERS = [ngxAlertService];