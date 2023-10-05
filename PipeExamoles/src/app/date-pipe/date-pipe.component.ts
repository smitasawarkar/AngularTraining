import { Component } from '@angular/core';

 

@Component({

  selector: 'app-date-pipe',

  template: `

    <p>

      date-pipe works!

    </p>

    <div>

            <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p> (1)

            <p>{{ dateVal | date: 'shortTime' }}</p>

 

            <p ngNonBindable>{{ dateVal | date:'fullDate' }}</p>

            <p>{{ dateVal | date: 'fullDate' }}</p>

 

            <p ngNonBindable>{{ dateVal | date: 'd/M/y' }}</p>

            <p>{{ dateVal | date: 'd/M/y' }}</p>

        </div>

  `,

  styles: [

  ]

})

export class DatePipeComponent {

  dateVal = new Date();

 

}