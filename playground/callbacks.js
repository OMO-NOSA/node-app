var getUser = (id, callback) => {

    var user = {
        id: id,
        name: 'Nosa'
    };

    callback(user);
};


getUser(3, (user) => {


    console.log(user);
});