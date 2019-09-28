const fs = require("fs");

const fd = fs.openSync("./data/app.log");

module.exports.read = () => {
  let count = 0;

  do {
    const buffer = Buffer.alloc(200);
    count = fs.readSync(fd, buffer, 0, buffer.length, null);
    console.log(buffer.toString());
  } while (count > 0);
};
