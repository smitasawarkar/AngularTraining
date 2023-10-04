import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  //templateUrl: './parent-component.component.html',
  template:`
    <button (click)="toggle()">HIDE</button>
    <app-child-component *ngIf="displayChild"></app-child-component>
  `,
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  parentMessage="this is parent message";
  displayChild=true;
  constructor() {
    console.log("PArent Constructor")
   }

  toggle(){
    this.displayChild=!this.displayChild;
  }

  ngOnInit() {
    console.log("Application ngOnInit ")
  }

  ngOnDestroy() {
     console.log("appComponent distroy")
  }
  ngDoCheck(){
    console.log("ngDoCheck() is called")
  }

}
