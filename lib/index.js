require('sugar');
var util = require('util');

// HACK: ...until Node.js `require` supports `instanceof` on modules loaded more than once. (bug in Node.js)
var Compressor = global.NodeDocumentCompressor || (global.NodeDocumentCompressor = require('node-document-compressor'));

// -----------------------
//  DOCS
// --------------------
//  - http://json.org
//  - http://nodemanual.org/latest/js_doc/JSON.html

// -----------------------
//  Constructor
// --------------------

// new Deflate ()
// new Deflate (options)
function Deflate () {
  var self = this

  self.klass = Deflate;
  self.klass.super_.apply(self, arguments);

  self.engine = require('compress-buffer');
  self.binary = true;
}

util.inherits(Deflate, Compressor);

// -----------------------
//  Class
// --------------------

Deflate.defaults = {
  options: {
    encoding: 'utf8'
  }
};

Deflate.options = Object.clone(Deflate.defaults.options, true);

Deflate.reset = Compressor.reset;

// -----------------------
//  Instance
// --------------------

// #compress (object)
Deflate.prototype.compress = function(object, encoding) {
  var self = this, data;

   // REVIEW: Always expect `Buffer`?
  if (typeof object !== 'string') {
    object = JSON.stringify(object);
  }

  object = new Buffer(object, encoding || self.options.encoding);

  try {
    data = self.engine.compress(object);

  } catch (err) {
    err.name = "Compression: " + err.name;
    err.message = err.message + "  =>  " + util.inspect(data);
    throw err;
  }

  return data;
};

// #decompress (data)
Deflate.prototype.decompress = function(data, encoding) {
  var self = this, object;

  if (typeof data === 'string') {
    data = new Buffer(data, encoding || self.options.encoding);
  }

  try {
    object = self.engine.uncompress(data);

    // REVIEW: Always return `Buffer`?
    // if (typeof object !== 'string') {
    //   object = JSON.parse(object.toString(encoding || self.options.encoding));
    // }

  } catch (err) {
    err.name = "Decompression: " + err.name;
    err.message = err.message + "  =>  " + util.inspect(data);
    throw err;
  }

  return object;
}

// -----------------------
//  Export
// --------------------

module.exports = Deflate;
