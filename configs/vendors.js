var exporter = require('./exporter');

var exports = new exporter()
//angular 2
.addExports(require('@angular/core/index.js'))
.addExports(require('@angular/common/index.js'))
.addExports(require('@angular/compiler/index.js'))
.addExports(require('@angular/http/index.js'))
.addExports(require('@angular/platform-browser/index.js'))
.addExports(require('@angular/platform-browser-dynamic/index.js'))
//rxjs
.addExports(require('rxjs/rx.js'))
.merge();

module.exports = exports;