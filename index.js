module.exports.asynchronousReadBak = require('./read/asynchronous.read.bak.').read;
module.exports.asynchronousReadChunk = require('./read/asynchronous.read.chunk.').read;
module.exports.asynchronousReadPartial = require('./read/asynchronous.read.partial.').read;
module.exports.promisifiedRead = require('./read/promisified.read.').read;
module.exports.synchronousRead = require('./read/synchronous.read.').read;
module.exports.synchronousReadPartial = require('./read/synchronous.read.partial.').read;
module.exports.temp = require('./read/temp.').read;
