var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var moment = require('moment');

var urlEncoded = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {

    res.end("<h1>This is the / URL</h1>");

});

app.get("/login", function (req, res) {

    response = {
        fname: req.query.fname,
        lname: req.query.lname,
        dob: req.query.dob,
        email: req.query.email,
        password: req.query.password

    };



    var birthDate = moment(response.dob);

    var currentDate = moment();

    var age = currentDate.diff(birthDate, 'years');

    birthDate.add(age, 'years');

    var months = currentDate.diff(birthDate, 'months');

    birthDate.add(months, 'months');

    var days = currentDate.diff(birthDate, 'days');



    var ageResponse = {
        
        fname: req.query.fname,

        lname: req.query.lname,

        dob: req.query.dob,

        email: req.query.email,

        password: req.query.password,
        
        years: age,

        months: months,

        days: days

    };



    res.end(JSON.stringify(ageResponse));

});



var server = app.listen(7070, function () {

    console.log("Server is started at 7070 port");

});

