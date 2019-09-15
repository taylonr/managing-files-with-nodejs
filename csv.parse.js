module.exports = {
  convertCsv: data => {
    const csv = data.split(/\n/);

    const rows = csv.map(_ => _.split(/,/));
    const header = rows[0];

    const vals = [];

    for (let i = 1; i < rows.length; i++) {
      let obj = {};
      for (let j = 0; j < header.length; j++) {
        var number = parseInt(rows[i][j]);
        if (isNaN(number)) {
          obj[header[j]] = rows[i][j];
        } else {
          obj[header[j]] = number;
        }
      }
      vals.push(obj);
    }

    return vals;
  }
};