var ngx = require('utils');

var ngxPortalClasses = require('./directives/portal/classes/portal.class.js');
var ngxPortalHostClasses = require('./directives/portal/classes/portal-host.class.js');
var ngxPortalDirectives = require('./directives/portal/portal.directive.js');

ngx.core = {
  baseComponent: require('baseComponent'),
  baseDirective: require('baseDirective'),
  animationService: require('animationService'),

  basePortalClass: ngxPortalClasses.basePortalClass,
  componentPortalClass: ngxPortalClasses.componentPortalClass,
  templatePortalClass: ngxPortalClasses.templatePortalClass,
  basePortalHostClass: ngxPortalHostClasses.basePortalHostClass,
  domPortalHostClass: ngxPortalHostClasses.domPortalHostClass,
  templatePortalDirective: ngxPortalDirectives.templatePortalDirective,
  portalHostDirective: ngxPortalDirectives.portalHostDirective
};

module.exports = ngx;