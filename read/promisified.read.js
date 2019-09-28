const { convertCsv } = require("../csv.parse");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
module.exports.read = () => {
  const read = async () => {
    const data = await readFile("./data/pulitzer-circulation-data.csv", "utf8");
    console.table(convertCsv(data));
  };

  read();
};
