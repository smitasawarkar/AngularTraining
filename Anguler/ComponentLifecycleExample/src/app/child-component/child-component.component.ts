import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  
  template:`
    THis is messaage from child 
  `,
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnInit {
  @Input() message: string;
  temp:string = "";
  constructor() {
    console.log("ChildComponent Constructor")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges")
     for (let propName in changes) {
      let chng = changes[propName];
       let cur  = JSON.stringify(chng.currentValue);
       let prev = JSON.stringify(chng.previousValue);
       console.log(`propName: currentValue = cur, previousValue = prev`);
     }
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() is called");
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.temp=this.message;
    console.log(this.message)
    console.log(this.temp)
  }

  ngOnDestroy(){
    alert("ngOnDestroy() is called  ")
  }

}