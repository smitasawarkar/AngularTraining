function getdata(event) {
      event.preventDefault();
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById('lname').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    addUserToTable(fname,lname,mobile,email,password);
    }
    
   
    function addUserToTable(fname,lname,mobile ,email, password) {
      var table = document.getElementById("userTable");
      var newRow = table.insertRow(-1);
    
    
    var fnameCell = newRow.insertCell(0);
    fnameCell.textContent = fname;
    
    var lnameCell = newRow.insertCell(1);
    lnameCell.textContent = lname;
    
    var mobileCell = newRow.insertCell(2);
    mobileCell.textContent = mobile;
    
    var emailCell = newRow.insertCell(3);
    emailCell.textContent = email;
    
    var passwordCell = newRow.insertCell(4);
    passwordCell.textContent = password;
    
    }
    
  
    document.getElementById('signupForm').addEventListener('submit', getdata);
    