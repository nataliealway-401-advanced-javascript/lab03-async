'use strict';

module.exports = exports = {};

let Contents = {};
/**
 * readFile 
 * @param  {} file
 * @param  {} cb
 */
exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, new Buffer('File Contents'));
  }
};

/**
 * writeFile 
 * @param  {} file
 * @param  {} buffer
 * @param  {} cb
 */
exports.writeFile = (file, buffer, cb)=> {
  if(file.match(/bad/i)){
    cb('Invalid File');
  } else {
    Contents = buffer;
    
    cb(undefined, Contents);
  }
};