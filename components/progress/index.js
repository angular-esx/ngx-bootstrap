var ngxBootstrap = require('ngxBootstrap');
var ngxProgressComponent = require('./progress.component.js'); 

ngxBootstrap.progress = {
  PROGRESS_COMPONENT: ngxProgressComponent,
  DIRECTIVES: [ ngxProgressComponent ]
};

module.exports = ngxBootstrap;