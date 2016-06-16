module.exports = {
  ITEM: {
    DIRECTIVE: require('./item/item.component.js'),
    SERVICE: require('./item/services/item.service.js'),
  },
  LINK: { 
    DIRECTIVE: require('./link/link.component.js'),
    SERVICE: require('./link/services/link.service.js')
  }
};