'use strict';
module.exports = exports = {};

exports.readFile = (file, cb) => {
  if(file.match(/bad/i) ) {
    cb('Invalid File');
  }
};


//Write a node application, called edit-file.js in the root of your project that will modify a file on your computer

//Done?
