/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const util = require('util');
/** promisfay read and write fs module */

const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

module.exports = exports = {};

exports.read = (file) => {
  console.log(file);
  return read(file)
    .then(contents => {
      return JSON.parse(contents.toString().trim());
    }).catch(err => {
      throw err;
    });
};

exports.write = (file, text) => {
  let contents = Buffer.from(typeof text === 'object' ? JSON.stringify(text) : text);
  return write(file, contents)
    .then(success => success)
    .catch(err => {
      throw err;
    });
};