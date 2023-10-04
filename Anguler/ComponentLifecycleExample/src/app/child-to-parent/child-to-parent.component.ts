import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
  @Input() count: number=0;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  increment() {
     this.count++;
     this.countChanged.emit(this.count);
   }
 decrement() {
     this.count--;
     this.countChanged.emit(this.count);
 }

  constructor() { }

  ngOnInit(): void {
  }

  

}

