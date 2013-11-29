# NODE-DOCUMENT-COMPRESSOR-DEFLATE [![Build Status](https://secure.travis-ci.org/grimen/node-document-compressor-deflate.png)](http://travis-ci.org/grimen/node-document-compressor-deflate)

**Compressor** adapter [deflate](https://github.com/egorFiNE/node-compress-buffer) for [node-document](https://github.com/grimen/node-document) ODM for Node.js.


## Installation

```shell
  $ npm install node-document-compressor-deflate
```


## Usage

**Basic:**

```javascript
  var Compressor = require('node-document-compressor-deflate');

  var Compressor = require('..');

  var compressor = new Compressor();

  var object = {foo: "bar"}, data;

  console.log("Object: ", require('util').inspect(object), typeof object);

  data = compressor.compress(object);

  console.log("Compressed: ", require('util').inspect(data), typeof data);

  object = compressor.decompress(data);

  console.log("Decompressed: ", require('util').inspect(object), typeof object);
```

For details; see [node-document](https://github.com/grimen/node-document).


## Test

**Local tests:**

```shell
  $ make test
```


## License

Released under the MIT license.

Copyright (c) [Jonas Grimfelt](http://github.com/grimen)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/grimen/node-document-compressor-deflate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

