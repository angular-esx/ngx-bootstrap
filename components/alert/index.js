module.exports = {
  DIRECTIVES: [
    require('./' + __COMPONENT_FILE__),
    require('./alert-link.directive.js')
  ],
  SERVICE: require('./services/alert.service.js')
};