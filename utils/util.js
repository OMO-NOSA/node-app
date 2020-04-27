module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};


module.exports.multiply = (a, b) => a * b;

module.exports.asynMultiply = (a, b, callback) => {
    setTimeout(() => {
        callback(a * b);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user = {
        firstName: names[0],
        lastName: names[1]
    }

    return user;
}