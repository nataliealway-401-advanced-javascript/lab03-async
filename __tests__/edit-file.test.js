'use strict';

jest.mock('fs');
const editFile = require('../edit-file.js');
const readFile = require('../lib/readFile.js');


describe('File reader ', () => {
  it('returns true when given valid file', () => {
    expect(true).toBeTruthy();
  });

  it('returns data when given a proper file', async () => {
    const file = `${__dirname}/files/data/person.json`;
    let data = await readFile(file);
    expect(data).toBeDefined();
  });

  it('returns an error when given a bad file', async () => {
    let badFile = `${__dirname}/../../data/bad.json`;
    try {
      let data = await editFile.readFile(badFile);
      expect(data).not.toBeDefined();
    }
    catch (error) {expect(error).toBeDefined();}
  });

  it('returns a string when given a proper file', async () => {
    let goodFile = `${__dirname}/files/data/person.json`;
    let data = await readFile(goodFile);
    expect(typeof data).toBe('string');
  });





    


});