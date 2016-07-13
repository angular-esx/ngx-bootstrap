var ngxBootstrap = require('utils');

ngxBootstrap.baseComponent = require('baseComponent');
ngxBootstrap.baseDirective = require('baseDirective');
ngxBootstrap.transcludeDirective = require('transcludeDirective');
ngxBootstrap.coreService = require('coreService');

// import directives
ngxBootstrap.checkbox = require('directive/checkbox/index.js');
ngxBootstrap.hide = require('directive/hide/index.js');
ngxBootstrap.radio = require('directive/radio/index.js');
ngxBootstrap.toggleItem = require('directive/toggle-item/index.js');

module.exports = ngxBootstrap;