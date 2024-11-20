const express = require('express');

const app = express();

app.use(express.json()); // using middleware //

app.listen(3003, () => {
    console.log("Server is listening");
})
let user = [
    {
        "id": "100",
        "name": "Sapta"
    },
    {
        "id": "101",
        "name": "Mohor"
    },
    {

        "id": "102",
        "name": "Babai"
    }
]

app.get('/user', (req, res) => {
    res.send(user);   // user is empty because we set empty object //
})

app.post('/user', (req, res) => {

    console.log(req.body);
    user = req.body;        // we get post request, user sent some json data //
    res.json({
        message: "data received",
        user: req.body        // respond to the user that we received data by giving message and body of json //
    });
})

app.patch('/user', (req, res) => {      // http method patch used to update data //
    console.log('req->body', req.body);
    let updatData = req.body;
    for (key in updatData) {

        user[key] = updatData[key];
    }

    res.json({
        message: "update successfully",
        user: req.body
    })
})

app.delete('/user', (req, res) => {
    user = {};
    res.json({
        message: "deleted successfully"
    })
})

app.get('/user/:username', (req, res) => {
    console.log(req.params.username);
console.log(req.params);
    res.send(' data received');
})
