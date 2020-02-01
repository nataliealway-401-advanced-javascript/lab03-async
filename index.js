
'use strict';

const fsCallback = require('./lib/files-callback.js');
const fsPromise = require('./lib/files-promise.js');

const file = process.argv.slice(2)[0];


const useCallbacks = cb => {
  fsCallback.read(file, (err, data) => {
    if (err) {
      console.error(err);
    } else
      data.lastName = 'Callback';
    fsCallback.write(file, data, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        fsCallback.read(file, (err, afterData) => {
          cb(afterData);
        });
      }

    });
  });
};
 
// useCallbacks();

const usePromise = (file) => {
  return fsPromise.read(file)
  
    .then(result => {
      
      result.lastName = 'promise';
      return result ;
    })
    .then(obj => fsPromise.write(file, obj))
    .then(result => fsPromise.read(file))
    .catch(err => {
      throw err;
    });
};

usePromise();
 

