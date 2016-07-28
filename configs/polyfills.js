var exporter = require('./exporter');

var exports = new exporter()
.addExports(require('zone.js/dist/zone.js'))
.addExports(require('reflect-metadata/Reflect.js'))
.merge();

module.exports = exports;