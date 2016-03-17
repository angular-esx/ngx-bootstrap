module.exports = function(params) {
  return function() {
    var _gulp = params.gulp,
      _jshint = params.plugins.jshint,
      _reload = params.plugins.browserSync.reload,
      _jshintStylish = params.plugins.jshintStylish;

    return _gulp
      .src([
        './components/**/*.js',
        './cores/**/*.js',
        './ngx-bootstrap.js',
        './ngx-bootstrap.utils.js'
      ])
      .pipe(_reload({ stream: true }))
      .pipe(_jshint())
      .pipe(_jshint.reporter(_jshintStylish));
  };
};
