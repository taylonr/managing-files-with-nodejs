const { createReadStream } = require('fs');

const stream = createReadStream('./data/app.log', {
    highWaterMark: 9550,
    encoding: "utf8"});

stream.on('data', data =>{
    stream.pause();
    console.log(data)

    setTimeout(() => {
        stream.resume();
    }, 2000);
});