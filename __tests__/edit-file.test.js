'use strict';

jest.mock('fs');
const file = require('../edit-file.js');


describe('Read files testing', () => {
    it('returns an error when given a bad file', () => {
        let directory = `${__dirname}/../../badFile.txt`;
        file.read(directory, (err, data) => {
            expect(err).toBeDefined();
        });
    });




})

