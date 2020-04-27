const utils = require('../utils/util');
const expect = require('expect');

it('Should add two numbers', () => {
    var res = utils.add(45, 8);

    expect(res).toBe(53).toBeA('number');

    // if (res !== 53) {
    //     throw new Error(`Expected 53, but got  ${res}`);
    // }

    //setImmediate(done);
});

it('Should  async add two numbers', (done) => {
    utils.asyncAdd(45, 8, (sum) => {

        expect(sum).toBe(53).toBeA('number');

        done()

    });



    // if (res !== 53) {
    //     throw new Error(`Expected 53, but got  ${res}`);
    // }

    //setImmediate(done);
});

it('should multiply two numbers', () => {
    var res = utils.multiply(5, 6);

    expect(res).toBe(30).toBeA('number');
    // if (res !== 30) {
    //     throw new Error(`Expected 30, but got ${res}.`);
    // }
});

it('should return async multiple of two numbers', (done) => {
    utils.asynMultiply(5, 6, (multiply) => {
        expect(multiply).toBe(30).toBeA('number');
        done();
    });
});


it('should set firstName and lastName', () => {
    var user = { location: 'Lagos', age: 29 };
    var res = utils.setName(user, 'Osagie Collins');

    expect(res).toInclude({
        firstName: 'Osagie',
        lastName: 'Collins'
    });
});