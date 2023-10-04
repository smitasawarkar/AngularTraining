var db;

createDatabase()
createTable()


function createDatabase() {
    db = openDatabase("RegisterData", "1.0", "THis is just a simple database", 2 * 1024 * 1024)
    alert("Database is created successfully...")
}

function createTable() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS RegisterData(fname,lname,mobile,email,password,rePassword)")
        alert("Table is created successfully")
    })

}

function saveData() {
    alert("Saving... functionality...")
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var mobile = document.getElementById('mobile').value
    var email = document.getElementById('email').value
    var password = document.getElementById('psw').value
    var rePassword = document.getElementById('psw-repeat').value

    db.transaction(function (tx) {
        console.log("INSERT INTO RegisterData(fname,lname,mobile,email,password,rePassword) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + email + "','" + password + "','" + rePassword + "')")
        tx.executeSql("INSERT INTO RegisterData(fname,lname,mobile,email,password,rePassword) VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + email + "','" + password + "','" + rePassword + "')")
        alert("Data is inserted successfully")
    })
}

function myFunction() {
    alert("function call");
    // event.preventDefault();
    saveData()
    alert("Saving done...");
    //location.replace("signIn.html");
    window.location.href = "signIn.html";
 
    
}
// function redirect() {
//     location.replace("signIn.html");
// }

// Add event listener to the form submission
//document.getElementById('registrationForm').addEventListener('submit', myFunction);