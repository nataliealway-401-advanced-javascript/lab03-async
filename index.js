'use strict';

const fsUsingCallback = require('./lib/files-callback.js');
const fsUsingPromise = require('./lib/files-promise.js');
let file = `${__dirname}/data/person.json`;


const useCallbacks = (cb) => {

fsUsingCallback.read(file, (err, data) => {
    if(err) {console.log(err);}
    else {
        data.lastName = 'Callback';
        fsUsingCallback.write(file, data, (err, results) => {
            if(err) {console.error(err);}
            else {
                fsUsingCallback.read(file, (err, afterData) => {
                    cb(afterData);
                })
            }
        })
    }
})

};

useCallbacks((data) => console.log(data));

const usePromise = () => {

    return fsUsingPromise.read(file)
      .then( data => {
        data.lastName = 'Promise';
        return data;
      })
      .then( obj => fsUsingPromise.write(file, obj))
      .then( result => fsUsingPromise.read(file))
      .then( data => console.log(data));
  
  };
  
  usePromise();

