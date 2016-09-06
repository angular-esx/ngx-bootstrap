import {
  shallowCopy,
  newGUID,
  isString,
  isObject,
  isArray,
  isFunction,
  isNull,
  isEmpty,
  distinct,
  forEach,
  splice
} from './utils';

export {
  ngxBaseComponent,
  ngxBaseDirective,
  ngxBasePortalHost,
  ngxBasePortal,
  ngxComponentPortal,
  ngxDomPortalHost,
  ngxTemplatePortal,
  ngxPortalHostDirective,
  ngxTemplatePortalDirective
} from './components';

export { ngxAnimationService } from './services';

export var ngxUtils = { 
  shallowCopy,
  newGUID,
  isString,
  isObject,
  isArray,
  isFunction,
  isNull,
  isEmpty,
  distinct,
  forEach,
  splice  
};