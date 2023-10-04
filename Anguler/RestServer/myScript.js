function fetchData(){
    fetch("http://localhost:3000/users")
    //fetch("data.json")
    .then(response =>response.json())
    .then(data => displayValues(data));
}

function displayValues(data){
    //console.log(data)

    // tbl="<table border='2px'>"
    // for(var i=0; i<data.result.length; i++){
    //     tbl+="<tr><td>"+data.result[i].name+"</td><td>"+data.result[i].marks.math+"</td><td>"+data.result[i].marks.english+"</td></tr>"
    // }

    // tbl+="</table>"
    // console.log(tbl)

    // document.getElementById('rec').innerHTML=tbl;


    console.log("length: "+data.length);

    tbl="<table border='2px'>"
    for(var i=0; i< data.length; i++) {
        tbl+="<tr><td>"+data[i].id+"</td><td>"+data[i].first_name+"</td><td>"+data[i].last_name+"</td><td>"+data[i].email+"</td></tr>";
    }

    tbl+="</table>"
    console.log(tbl)

    document.getElementById('rec').innerHTML=tbl;
}
