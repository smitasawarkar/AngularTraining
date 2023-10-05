import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-httpexample',
  template: `
    <p>
      httpexample works!
    </p>
<table border="2px">
  <tr>
    <th>Name</th>
    <th>UserName</th>
    <th>email</th>
    <th>phone</th>
    <th>Website</th>
    <th>Address</th>
    <th>Company</th>
  </tr>
  <tr *ngFor="let rec of users">
    <td>{{rec.name}}</td>
    <td>{{rec.username}}</td>
    <td>{{rec.email}}</td>
    <td>{{rec.phone}}</td>
    <td>{{rec.website}}</td>
    <td><pre>{{rec.address | json}}</pre></td>
    <td><pre>{{rec.company | json}}</pre></td>
  </tr>
</table>
   
  `,
  styles: [
  ]
})
export class HTTPExampleComponent implements OnInit {
 
  users:any=[]
  constructor(private httpClient: HttpClient){}

  ngOnInit(){
   var rec='';
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
      console.log(data);
      this.users = data;
      rec=this.users;
    })

    console.log(this.users)
 
  }


}