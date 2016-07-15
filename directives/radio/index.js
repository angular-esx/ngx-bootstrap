var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.radio = {
  DIRECTIVES: [
    require('./radio.directive.js'),
    require('./radio-group.directive.js')
  ],
  radioService: require('./services/radio.service.js'),
  radioGroupService: require('./services/radio-group.service.js'), 
  services: [
    require('./services/radio.service.js'),
    require('./services/radio-group.service.js')
  ]
};

module.exports = ngxBootstrap;