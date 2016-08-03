import { ngxIconComponent } from './icon.component';
import { ngxIconService } from './services/icon.service';

export * from './icon.component';
export * from './services/icon.service';

export var NGX_ICON_DIRECTIVES = [ngxIconComponent];
export var NGX_ICON_PROVIDERS = [ngxIconService];