const fs = require("fs");
const { convertCsv } = require("../csv.parse");

module.exports.read = () => {
  fs.open("./data/pulitzer-circulation-data.csv", (err, fd) => {
    const buffer = Buffer.alloc(200);

    fs.read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
      console.table(convertCsv(buff.toString()));
    });
  });
};
