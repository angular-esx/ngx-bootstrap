module.exports = {
  DIRECTIVES: [
    require('./list.component.js'),
    require('./list-item.component.js'),
    require('./list-item-content.component.js')
  ],
  SERVICES: [require('./services/list-item.service.js')],
  ITEM_SERVICE: require('./services/list-item.service.js')
};