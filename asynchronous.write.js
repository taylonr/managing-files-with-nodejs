const {constants, writeFile} = require('fs');

writeFile('./data/newapp.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {mode: constants.S_IRUSR | constants.S_IWUSR},
    (err) => {
        err ? console.log(err) : console.log("file saved!");
    });