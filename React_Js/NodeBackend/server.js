const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'springbootdb',
  insecureAuth : true
});
// Initialize the app
const app = express();
// https://expressjs.com/en/guide/routing.html
app.get('/inventory', function (req, res) {
    connection.connect();
    connection.query('select * from employee', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
    connection.end();
});
// Start the server
app.listen(5050, () => {
 console.log('Go to http://localhost:5050/inventory to see posts');
});
