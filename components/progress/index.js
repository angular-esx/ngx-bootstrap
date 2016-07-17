var ngx = require('ngx');
var ngxProgressComponent = require('./progress.component.js'); 

ngx.progress = {
  progressComponent: ngxProgressComponent,
  DIRECTIVES: [ ngxProgressComponent ]
};

module.exports = ngx;