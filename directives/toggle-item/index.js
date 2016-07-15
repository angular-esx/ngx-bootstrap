var ngxBootstrap = require('ngxBootstrap');

ngxBootstrap.toggleItem = {
    DIRECITVES: [
        require('./toggle-item.directive.js')
    ],
    SERVICE: require('./services/toggle-item.service.js')
};

module.exports = ngxBootstrap;