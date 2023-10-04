// Function to handle form submission
function getdata(event) {
//alert("Loging js call");
  event.preventDefault(); // Prevent the form from submitting through HTTP

  // Get input values
  var fname = document.getElementById("fname").value;
//alert("fname ::::::: " + fname);
var lname = document.getElementById('lname').value;
//alert("lname ::::::: " + lname);
var mobile = document.getElementById('mobile').value;
alert("mobile ::::::: " + mobile);
var email = document.getElementById('email').value;
alert("email ::::::: " + email);
var password = document.getElementById('password').value;
alert("password ::::::: " + password);

  // Add the user details to the table
  addUserToTable(fname,lname,mobile,email,password);
}

// Function to add user details to the table
function addUserToTable(fname,lname,mobile ,email, password) {
  var table = document.getElementById("userTable");
  var newRow = table.insertRow(-1);// -1 to append the row at the end



  
// Insert data into the new row

var fnameCell = newRow.insertCell(0);
fnameCell.textContent = fname;

var lnameCell = newRow.insertCell(1);
lnameCell.textContent = lname;

var mobile = newRow.insertCell(2);
mobile.textContent = mobile;

var email = newRow.insertCell(3);
email.textContent = email;

var password = newRow.insertCell(4);
password.textContent = password;

}

// Add event listener to the form submission
document.getElementById('signupForm').addEventListener('submit', getdata);
