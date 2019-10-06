const { readFileSync } = require("fs");

module.exports.read = (filename = "small_stream.log") => {
  try {
    console.time("reading");
    const data = readFileSync(`./data/${filename}`, "utf8");
    console.timeEnd("reading");
  } catch (err) {
    console.log(`Error with file: ${err}`);
  }
};
