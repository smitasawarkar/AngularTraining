import { Component, OnInit } from '@angular/core';
class Item{
  name:string="";
  value:string=""
}
@Component({

  selector: 'app-structural-directive',
  template: `
  <div>
  <fieldset>
    <div id="d1">
    
<h3>ng-template with ngIf</h3>
<button type="button" (click)="onToggle1()">Toggle</button>

<ng-template [ngIf]= "toggleFlag1" >
   <div>Hello World!</div>
</ng-template>

<h3>ng-template with ngIf-else</h3>

<button type="button" (click)="onToggle2()">Toggle</button>

<div *ngIf="toggleFlag2; else msgElseBlock" >
   <div>Hello World!</div>
</div>

<ng-template #msgElseBlock>
   <div>Else Block: Hello World! </div>
</ng-template>

<h3>ng-template with ngIf-then-else</h3>

<button type="button" (click)="onToggle3()">Toggle</button>

<div *ngIf="toggleFlag3; then thenBlock else elseBlock">

</div>
<ng-template #thenBlock>
    <div>Then Block: Hello World!</div>
</ng-template>
<ng-template #elseBlock>
    <div>Else Block: Hello World!</div>
</ng-template>

    </div>
    </fieldset>

  <hr>
<fieldset>
    <div id="d2">

    <h3>ngTemplate with ngSwitch</h3>
    <select (change)="SetDropDownValue($event)">
  <option *ngFor="let item of items;" [value]="item.name">{{item.name}}</option>
</select>
<div [ngSwitch]='dropDownValue'>
    <h3 *ngSwitchCase="'One'">1 is selected</h3>
    <h3 *ngSwitchCase="'Two'">2 is selected</h3>
    <h3 *ngSwitchCase="'Three'">3 is selected</h3>
    <h3 *ngSwitchDefault="">You have not selected any Number</h3>
</div>


    </div>
    </fieldset>
   <hr>
   
    <fieldset>
<input type="radio" name="direction" (click)="myDir='east'">East
<input type="radio" name="direction" (click)="myDir='west'">West
<input type="radio" name="direction" (click)="myDir='north'">North
<input type="radio" name="direction" (click)="myDir='south'">South

<div [ngSwitch]='myDir'>
    <h3 *ngSwitchCase="'east'">East is selected</h3>
    <h3 *ngSwitchCase="'west'">West is selected</h3>
    <h3 *ngSwitchCase="'north'">North is selected</h3>
    <h3 *ngSwitchCase="'sounth'">Sounth is selected</h3>
    <h3 *ngSwitchDefault="">You have not selected any Number</h3>
</div>

    </fieldset>

   <hr>
   
<fieldset>

<div *ngFor="let sides of countrySides;">
  <input type="radio" name="direction" (click)="myDir=sides"/>{{sides}}
</div>
<div [ngSwitch]='myDir'>
    <h3 *ngSwitchCase="'east'">East is selected</h3>
    <h3 *ngSwitchCase="'west'">West is selected</h3>
    <h3 *ngSwitchCase="'north'">North is selected</h3>
    <h3 *ngSwitchCase="'sounth'">Sounth is selected</h3>
    <h3 *ngSwitchDefault="">You have not selected any Number</h3>
</div>
</fieldset>


<fieldset>


Enter new Country side <input type="text" [(ngModel)]="newSide"/>
 <button (click)="addCountry()">Add NEW Country</button>

</fieldset>
  </div>

  `,
  styles: [
  ]
})

export class StructuralDirectiveComponent implements OnInit {

  items:Item[]=[{name:'One',value:'1'},{name:'Two',value:'2'},{name:'Three',value:'3'}]
  selectedValue:string=""
  dropDownValue = "";
  newSide = "";
  myDir=""
  countrySides=["east","west","north","south"]
  SetDropDownValue(drpValue : any) {
    this.dropDownValue = drpValue.target.value;
  }

  addCountry(){
    this.countrySides.push(this.newSide)
  }


  // SetDropDownValue(drpValue : any) {
  //   this.dropDownValue = drpValue.target.value;
  // }
 
 
 
  toggleFlag2=true
  toggleFlag3=true
  toggleFlag1=true




  constructor() { }

  ngOnInit(): void {


  }

  onToggle2(){
    alert("onToggle2 is called")
  }

  onToggle1(){
    alert("onToggle1 is called")
  }

  onToggle3(){
   alert("onToggle3 is called")
  }

}