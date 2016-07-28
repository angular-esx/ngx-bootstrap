var exporter = require('./exporter');

var exports = new exporter()
.addExports(require('../cores/index.js'))
.addExports(require('../components/index.js'))
.addExports(require('../directives/index.js'))
.merge();

module.exports = exports;