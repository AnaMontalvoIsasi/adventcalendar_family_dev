const path = require('path');

if( process.env.NODE_ENV === "production") {
  module.exports = {
    assetsDir: '../../static',
    publicPath: '/',
    outputDir: path.resolve(__dirname, '../templates/vue_template'),
    runtimeCompiler: template
  };
}