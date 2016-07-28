var exporter = require('../configs/exporter.js');

var exports = new exporter()
.addExports(require('./checkbox/index.js'))
.addExports(require('./radio/index.js'))
.addExports(require('./hide/index.js'))
.merge();

module.exports = exports;