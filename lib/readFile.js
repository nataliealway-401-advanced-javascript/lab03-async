'use strict';
const fs = require('fs');
const util = require('util');
let readFilePromise = util.promisify(fs.readFile);


/**
 * @function - Gets data from the file
 * @param {*} file 
 */
async function readFile(file){
  try {
    let data = await readFilePromise(file);
    let object = await data.toString().trim();
    return object;
  }
  catch(err) {
    handleError(err);
  }
}

module.exports = readFile;