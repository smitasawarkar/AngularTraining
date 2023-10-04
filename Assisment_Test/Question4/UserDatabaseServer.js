var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

const connection = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: 'root',

    database: 'springbootdb',

    insecureAuth: true

});

connection.connect(function(err){

    if (err) {

        console.log(err);

    }

    else {

        console.log("Connection established");

      // Create table if not exists

        var createTableQuery = "CREATE TABLE IF NOT EXISTS signUpData (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), dob VARCHAR(255), email VARCHAR(255), password VARCHAR(255))";

        connection.query(createTableQuery, function(err, result) {

            if (err) throw err;

            console.log("Table created");

        });

        // Route for signup page

        app.get('/signup', function(req, res) {

            res.sendFile(__dirname + '/signup.html');

        });




        // Route for handling signup form submission

        app.get('/process_signup', function(req, res) {

            var name = req.query.name;

            var dob = req.query.dob;

            var email = req.query.email;

            var password = req.query.password;




            // Insert data into the table

            var insertDataQuery = "INSERT INTO signUpData (name, dob, email, password) VALUES ?";
            
          
            var selectedDate = new Date(dob);
             var formattedDate = selectedDate.toLocaleDateString();
            console.log("formattedDate :: "+formattedDate); 
            dob=formattedDate;
             console.log("dob :: "+dob); 
             
             var values = [[name,dob, email, password]];

            connection.query(insertDataQuery, [values], function(err, result) {

                if (err) throw err;

                console.log("Data inserted");




                res.send("Signup successful!");

            });

        });




        app.get('/displaydata', function(req, res) {

            var selectDataQuery = "SELECT * FROM signUpData";

            connection.query(selectDataQuery, function(err, result) {

                if (err) throw err;

                console.log("Data selected");
                // Generate the HTML table dynamically

                var table = "<table style='border: 2px solid black;'><tr style='border: 2px solid black;'><th style='border: 2px solid black;'>ID</th><th style='border: 2px solid black;'>Name</th><th style='border: 2px solid black;'>DOB</th><th style='border: 2px solid black;'>Email</th><th style='border: 2px solid black;'>Password</th></tr>";

                result.forEach(function(row) {

                    table += `<tr style='border: 2px solid black;'><td style='border: 2px solid black;'>${row.id}</td><td style='border: 2px solid black;'>${row.name}</td><td style='border: 2px solid black;'>${row.dob}</td><td style='border: 2px solid black;'>${row.email}</td><td style='border: 2px solid black;'>${row.password}</td></tr>`;

                });

                table += "</table>";

                res.send(table);

            });

        });
        // Route for updating data

        app.get('/updatedata', function(req, res) {

            var id = req.query.id;

            var name = req.query.name;

            var dob = req.query.dob;

            var email = req.query.email;

            var password = req.query.password;

            
            var updateDataQuery = "UPDATE signUpData SET name = ?, dob = ?, email = ?, password = ? WHERE id = ?";

            var values = [name, dob, email, password, id];

            connection.query(updateDataQuery, values, function(err, result) {

                if (err) throw err;

                console.log("Data updated");
                 res.send("Update successful!");

            });

        });




        // Route for deleting data

        app.get('/deletedata', function(req, res) {

            var id = req.query.id;

            var deleteDataQuery = "DELETE FROM signUpData WHERE id = ?";

            connection.query(deleteDataQuery, id, function(err, result) {

                if (err) throw err;

                console.log("Data deleted");
                res.send("Delete successful!");

            });

        });




        // Start the server

        app.listen(7070, function() {

            console.log("Server is running on port 7070");

        });

    }

});