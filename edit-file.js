
'use strict';

const fs = require('fs');
const readFile = require('./lib/readFile.js');
const validator = require('./lib/validator.js');
const schema = require('./lib/schema.js');

let argv = process.argv;
let file = `${__dirname}/files/data/${argv[2]}`;

/**
 * @function saveFile()
 * Modifies data from the json file and writes back to JSON
 */
async function saveFile(){
//credit to Travis Skyles
  try {
    let data = await readFile(file);
    let object = JSON.parse(data);

    data.firstName = 'Natalie';
    data.hair = { type: 'wavy', color: 'blonde' };
    data.lastName = 'Alway';
    data.favoriteFoods = ['sushi', 'curry'];

    await validator.isValid(schema, object);

    fs.writeFile(file, JSON.stringify(object, null), async (err) => {
      console.log(err || object);
    });
  }
  catch (error) {
    handleError(error);
  }
}


module.exports = saveFile;