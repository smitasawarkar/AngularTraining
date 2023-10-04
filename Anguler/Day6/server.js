// var http=require('http');
// var url=require('url');
// http.createServer(function(req, res){
    // res.writeHead(200, {'Content-Type': 'application/text'});
    // res.end("<h1>This is my server</h1>");
//--------------------------------------------------------------
    // var q=url.parse(req.url,true).query;
    // console.log(q.year);    
    // console.log(q.month);
    // res.end("<h1>This is my server</h1>"+q.year+"  "+q.month);
    //}).listen(6060)
//----------------------------------------------------------------




//creating apis
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlEncoded=bodyParser.urlencoded({extended:false})

app.get('/', function(req, res){
    res.end("<h1>This is / url </h1>")
})




//using post method

app.post("/login",urlEncoded,function(req,res){
    response={
        username:req.body.username,
        password:req.body.password
    }
    console.log(response)
    res.end(JSON.stringify(response))
})
 
//using get method
  app.get("/login",function(req, res){
     //  res.end("<h1>This is /login  is invoked</h1>");
    response={
        username:req.query.username,
        password:req.query.password
    }
    console.log(response)
    res.end(JSON.stringify(response));
})




var server = app.listen(7070,function(){
    
    console.log("Server is started at 7070 port")
})

