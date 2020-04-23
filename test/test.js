const utils = require('../utils/util');


it('Should add two numbers', () => {
    var res = utils.add(45, 8);

    if (res !== 53) {
        throw new Error(`Expected 53, but got  ${res}`);
    }

    //setImmediate(done);
});


it('should multiply two numbers', () => {
    var res = utils.multiply(5, 6);

    if (res !== 30) {
        throw new Error(`Expected 30, but got ${res}.`);
    }
});