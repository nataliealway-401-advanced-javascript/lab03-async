'use strict';

const fsUsingCallback = require('./lib/files-callback.js');
const file = `${__dirname}process.argv.slice(2)[0]`;
const useCallbacks = (cb) => {
//define  the callback method of accesing files
//1.read file from the command line
//2. edit data.firstname
//    - validate against the schema you create*
//      3.write data into the db
//       4.immediatly read the file again
//         5. console.log the results

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

useCallbacks((data) => console.log(data))
