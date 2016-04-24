var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var pathComponents = './components';

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

// add components
function writeFile() {
  // var content = getDirectories(pathComponents).map(function(component){
  //   return 'require("'+ pathComponents + '/' + component + '/' + component + '.js' +'");';
  // }).join('');
  
  var content = 'require("./components/label/label.component.js");';

  fs.writeFile("./ngx.js", content, function(err) {
    if(err) {
      return console.log(err);
    }
  });
}

// writeFile();

module.exports = {
  context: __dirname,
  // entry: "./ngx.js",
  output: {
    path: __dirname,
    // filename: "ngx.js",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'ngxBootstrap',
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};