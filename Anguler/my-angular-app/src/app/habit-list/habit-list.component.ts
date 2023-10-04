import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
        habit-list works!
        <h1>DATA is:-  {{data}} </h1>
        <button class='btn' (click)="add()">++</button>
  `,
  styles: [
  ]
})
export class HabitListComponent implements OnInit {

  data = 0;
  constructor() { 
    console.log('useDetailsComponent constructor is called'+this.data)
  }
  ngOnInit(){
    console.log('ngOnInit is called')
  }

  ngOnChanges(){
    console.log('ngOnChanges is called')
  }

  ngDoCheck(){
    console.log('ngDoCheck is called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit is called')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy is called')
  }
  add(){
    this.data++;
  }
}

