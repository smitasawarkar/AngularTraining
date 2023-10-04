var express=require('express');
var app = express();

var mysql = require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maveric',
    insecureAuth: true
})
connection.connect(function(err){
    if (err) {
        console.log(err);
    }
    else{
        console.log("Connection established")
        connection.query("select * from student",function(err,result){
            if(err)throw err
            console.log(result)
        })
    }
})
