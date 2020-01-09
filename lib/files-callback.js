'use strict';

const fs = require('fs');

module.exports = exports = {};


//wraps fs.readFile, processes the file as a JSON string, returning the object to the calling function
exports.read = (file, cb) => {
    fs.readFile(file, (err, data) => {
        if(err) {cb(err)}
        else {
            try {
                cb(null, JSON.parse(data.toString().trim()));
            } catch(e) {cb(e);}
        }
    });
};
//wraps fs.writeFile, processing  the 'text' as JSON when it present as an object. and isong the text if not, return data to the callback as either an error or data
exports.write = (file, text, cb) => {
    let buffer = Buffer.from( typeof text === 'object'? JSON.stringify(text): text);
    fs.writeFile(file, buffer, cb);

}