module.exports = {
  NGX_ITEM: {
    DIRECTIVE: require('./item/item.component.js'),
    SERVICE: require('./item/services/item.component.js'),
  },
  NGX_LINK: { 
    DIRECTIVE: require('./link/link.component.js'),
    SERVICE: require('./link/services/link.service.js')
  }
};