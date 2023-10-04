import { Component, OnInit,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent  {
  @Input('myCount') count: number=0;

  constructor() { }
 
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges")
    console.log(changes)
     for (let propName in changes) {
      let chng = changes[propName];
       let cur  = JSON.stringify(chng.currentValue);
       let prev = JSON.stringify(chng.previousValue);
       
       console.log('propName: currentValue ='+cur+", previousValue = prev"+prev);
     }
  }


  


}