
//creating apis
var express = require('express');
var app = express();
var axios = require('axios');

var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
    axios.get(' http://localhost:2020/users')
        //.then(response => console.log(response))
        .then(response => {
            console.log(response.data)
            res.json(response.data)
        })

    
})

// app.get('/', function(req, res){
//     axios.get(' http://localhost:2020/users')
//     //.then(response => console.log(response.data))
//    .then(response=> response.data.json())

//         res.end("<h1>watch server console for data </h1>")

// })





var server = app.listen(7070, function () {

    console.log("Server is started at 7070 port")
})
