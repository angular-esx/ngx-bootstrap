var ngxPortalClasses = require('./directives/portal/classes/portal.class.js');
var ngxPortalHostClasses = require('./directives/portal/classes/portal-host.class.js');
var ngxPortalDirectives = require('./directives/portal/portal.directive.js');

module.exports = {
  utils: require('./utils'),
  baseComponent: require('./components/base/base.component.js'),
  baseDirective: require('./directives/base/base.directive.js'),
  animationService: require('./services/animation.service.js'),

  basePortalClass: ngxPortalClasses.basePortalClass,
  componentPortalClass: ngxPortalClasses.componentPortalClass,
  templatePortalClass: ngxPortalClasses.templatePortalClass,

  basePortalHostClass: ngxPortalHostClasses.basePortalHostClass,
  domPortalHostClass: ngxPortalHostClasses.domPortalHostClass,
  templatePortalDirective: ngxPortalDirectives.templatePortalDirective,
  portalHostDirective: ngxPortalDirectives.portalHostDirective
};
