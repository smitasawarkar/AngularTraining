function fetchData(){
    fetch("http://localhost:2020/users")
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


    tbl="<table border='2px'>"
    for(var i=0; i<data.result.length; i++){
        tbl+="<tr><td>"+data.result[i].id+
        "</td><td>"+data.result[i].first_name+
        "</td><td>"+data.result[i].last_name+
        "</td><td>"+data.result[i].email+
        "</td></tr>"
    }

    tbl+="</table>"
    console.log(tbl)

    document.getElementById('rec').innerHTML=tbl;
}
