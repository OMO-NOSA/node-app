module.exports.add = (a, b) => a + b;
module.exports.multiply = (a, b) => a * b;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user = {
        firstName: names[0],
        lastName: names[1]
    }

    return user;
}