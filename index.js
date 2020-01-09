'use strict';
const file = require('./edit-file');
const util = require('util'); //takes async function and returns with error-first cb


//Create a schema for person.json. The rules for each property (type and required) are up to you

//Need to promisify
//read the file
//save it to..?

const personRules = {
  fields: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
    },
    hair: {
      type: 'string',
      color: 'string',
      required: true,
    },
    favoriteFoods: {
      type: 'string',
      required: false,
    },
    married: {
      type: 'boolean',
      required: false,
    },
    kids: {
      type: 'number',
      required: false,
    },
  },
};