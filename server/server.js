const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Welcome to new express application");
});




app.listen(port, () =>
    console.log(`Server is listening at http://localhost:${port}`)
);