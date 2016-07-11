var gulp = require('gulp');
var del = require('del');

module.exports = function () {
  del.sync(['./dist/**']);
}