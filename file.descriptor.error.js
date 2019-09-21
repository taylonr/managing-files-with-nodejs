const fs = require("fs");

console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
}
