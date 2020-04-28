const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send({
        error: 'page not found',
        name: 'Test application'
    });
});

app.get("/user", (req, res) => {
    res.send([{
        name: 'Nosa',
        age: 29
    }, {
        name: 'Fortune',
        age: 31
    }, {
        name: 'Judith',
        age: 28
    }]);
});




app.listen(port, () =>
    console.log(`Server is listening at http://localhost:${port}`)
);
module.exports.app = app;