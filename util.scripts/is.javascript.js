const {statSync} = require('fs');
const {join} = require('path');

module.exports.isJavaScript = (path, file) =>
      statSync(join(path, file)).isDirectory() === false &&
      file[0] !== "_" &&
      file.indexOf(".test") === -1 &&
      file.indexOf(".json") === -1 &&
      file.indexOf("index") === -1 &&
      file.indexOf(".js") > 0;