var ngxBootstrap = require('utils');

ngxBootstrap.baseComponent = require('baseComponent');
ngxBootstrap.baseDirective = require('baseDirective');
ngxBootstrap.transcludeDirective = require('transcludeDirective');
ngxBootstrap.coreService = require('coreService');

ngxBootstrap.checkbox = require('directive/checkbox/index.js');

module.exports = ngxBootstrap;