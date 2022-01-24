const { cp } = require('fs');


function callback(err) {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
}

cp('./test', './test2', callback);