
var Compressor = require('node-document-compressor');

module.exports = Compressor.Spec('Deflate', {
  module: require('..'),
  engine: require('compress-buffer'),
  options: {encoding: 'utf8'},
  pack: function(v) { return require('compress-buffer').compress(new Buffer(v)); },
  unpack: require('compress-buffer').uncompress,
  binary: true
});
