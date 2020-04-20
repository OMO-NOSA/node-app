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