'use strict';
jest.mock('fs');
const files = require('../lib/files-promise.js');

describe('Files with promises testing', ()=>{
  it('properly writes an object to a file', () =>{
    let obj = {foo:'bar'};
    return files.write('test.json', obj)
      .then(success=> {
        expect(success).toBeDefined();
      });
  });


  it ('properly writes a JSON string to a file', () => {
    let obj = {foo: 'bar'};
    let str = JSON.stringify(obj);
    files.write('test.json', str)
      .then(success => {
        expect(success).toBeDefined();
        files.read('File Contents');
      })
      .then (json => {
        expect(json.foo).toEqual('bar');
      });
  });
        
  it('fails when given invalid JSON', () => {
    let obj = 'bad';
    let str = JSON.stringify(obj);

    files.write('bad.json', str)
      .then(failure => {
        expect(failure).toBeDefined();
        files.read('test.json');
      })
      .then(json => {
        expect(json.obj).toEqual('bad');
      });
  });
      
});