var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve('Hey, It worked!');
       reject('Unable to fulfill promise');
    }, 5500);
});

somePromise.then((message) => {
    console.log('success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
    console.table('mmmmmmm')
});



var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else{
                reject('Arguments must be numbers');
            }
        }, 7000)
    });
}


asyncAdd(7, 9)
    .then((res) => {
        console.log('Result: ', res);
        return asyncAdd(res, 45)
    
    }).then((res) => {
        console.log('should be :', res);
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });