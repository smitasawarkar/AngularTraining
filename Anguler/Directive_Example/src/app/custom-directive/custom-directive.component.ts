
import { Component,OnInit } from '@angular/core';

 

@Component({

  selector: 'app-custom-directive',

  template: `

  Enter your favorite color <input type="text" [(ngModel)]="titleColor">
  <h4 appCPColor [cpColor]="titleColor"> cpColor Directive Demo using Bracket []</h4>

  <h4 appCPColor bind-cpColor="titleColor"> cpColor Directive Demo using bind- prefix  </h4>
  
  <h4 appCPColor cpColor="{{titleColor}}"> cpColor Directive Demo using Interpolation</h4>
  
   
  
      
  
      <p appChangeText>
  
      </p>
  
      <h1 appMyDateDirective>
  
      </h1>
  
      <h3 appCPColor>
  
      </h3>  

  `,

  styles: [

  ]

})

export class CustomDirectiveComponent implements OnInit {

  title= "This is Custom directive"

  titleColor="red"

  constructor(){}

  ngOnInit(): void {

   

  }

 

}
