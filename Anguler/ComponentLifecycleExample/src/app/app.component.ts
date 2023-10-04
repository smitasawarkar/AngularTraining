import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction Child To Parent';
  Counter = 5;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }

  // title = 'Component Interaction';
  // Counter = 0;
 
  // increment() {
  //   this.Counter++;
  // }
  // decrement() {
  //   this.Counter--;
  // }

  studentList: Array<any> = new Array<any>();  
  
  constructor() { }  
  ngOnInit() {  
      this.studentList = [  
          { SrlNo: 1, Name: 'Rajib Basak', Course: 'Bsc(Hons)', Grade: 'A' },  
          { SrlNo: 2, Name: 'Rajib Basak1', Course: 'BA', Grade: 'B' },  
          { SrlNo: 3, Name: 'Rajib Basak2', Course: 'BCom', Grade: 'A' },  
          { SrlNo: 4, Name: 'Rajib Basak3', Course: 'Bsc-Hons', Grade: 'C' },  
          { SrlNo: 5, Name: 'Rajib Basak4', Course: 'MBA', Grade: 'B' },  
          { SrlNo: 6, Name: 'Rajib Basak5', Course: 'MSc', Grade: 'B' },  
          { SrlNo: 7, Name: 'Rajib Basak6', Course: 'MBA', Grade: 'A' },  
          { SrlNo: 8, Name: 'Rajib Basak7', Course: 'MSc.', Grade: 'C' },  
          { SrlNo: 9, Name: 'Rajib Basak8', Course: 'MA', Grade: 'D' },  
          { SrlNo: 10, Name: 'Rajib Basak9', Course: 'B.Tech', Grade: 'A' }  
      ];  
  }  
}