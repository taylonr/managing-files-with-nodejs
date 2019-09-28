const { convertCsv } = require("../csv.parse");

const { readFileSync } = require("fs");

module.exports.read = () => {
  try {
    const data = readFileSync("./data/pulitzer-circulation-data.cs", "utf8");
    console.table(convertCsv(data));
  } catch (err) {
    console.log(`Error with file: ${err}`);
  }
};
