import { style } from '@angular/animations';
import { Component } from '@angular/core';
const users=[
  {
    id:1,
    first_name:'Eshan',
    last_name:'Madake'
   
  },
  {
    id:2,
    first_name:'Tanish',
    last_name:'Madake'

  },
  {
    id:1,
    first_name:'Minal',
    last_name:'Madake'
  }
]

@Component({
  
  selector: 'app-root',
//  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
 template: `
 <fieldset>
 <legend>app-habit-list Component</legend>

 <app-habit-list></app-habit-list>
 </fieldset>
 <fieldset>
 <app-child></app-child>

 <legend>Root Component</legend>


 <table>
 <thead><th>id</th><th>first_Name</th><th>Last Name</th></thead>
 <tbody>
   <tr *ngFor="let usr of Users">
     <td>{{usr.id}}</td>
     <td>{{usr.first_name}}</td>
     <td>{{usr.last_name}}</td>
   </tr>
 </tbody>

</table>




 <h1>This is inline template {{title}} </h1>
 <p>This is paragaph  ::: {{firstName}} </p>
 <img [src]="imgUrl"/>
 <input type="text" [value]="firstName">
 <button (click)="callMe()">CALL ME</button><br><br>
 {{message}}
 <button (click)="changemessage()">change Message </button>
 <br><br>
 <h1 *ngFor="let i of months">{{i}}</h1>

 <br><br>
 <span *ngIf = "isavailable">Condition is valid.</span> 


 <br><br>
 <div>
 <select>
 <option *ngFor="let i of months">{{i}}</option>
</select>
</div>

<div>
<span *ngIf="isnotavailable; else condition1">Condition is valid.</span>
<ng-template #condition1>Condition is invalid</ng-template>
</div>


<br><br>
<span *ngIf="isavailable; then condition1 else condition2">Condition is valid.</span>
<ng-template #condition1>Condition is valid</ng-template>
<ng-template #condition2>Condition is invalid</ng-template>

<br><br>
<button (click)="myClickFunction($event)">
       Click Me
   </button>

   <br><br>
  
 </fieldset>
`,
// styleUrls: ['./app.component.css'] 
styles:['h1{ color:red; }']
})
export class AppComponent {
  title = 'my-angular-app';
  firstName="EShan";
  userName="smita";
  Users=users;
  message='';
 
  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFh8XRLI9SS0uabfpDHNe6To4RHrctjg-Pkw&usqp=CAU"
 
  callMe(){
    alert("called")
  }

  changemessage(){
    this.message="Anguler";
  }
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  
  isavailable = true;   //variable is set to true
isnotavailable = false;

 //
            myClickFunction(event:any) { 
              alert("Button is clicked");
              console.log(event);
           }
        
 
}
