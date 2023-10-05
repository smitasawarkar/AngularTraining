import { Component, OnInit } from '@angular/core';

 

@Component({

  selector: 'app-jsonpipe',

  template: `

  <p>Without JSON pipe:</p>

  <pre>{{object}}</pre>

  <p>With JSON pipe:</p>

  <pre>{{object | json}}</pre>

 

     

    <p>

      jsonpipe works!

    </p>

  `,

  styles: [

  ]

})

export class jsonpipeComponent {

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

 

  constructor() { }

 

  ngOnInit(): void {

  }

 

}

 