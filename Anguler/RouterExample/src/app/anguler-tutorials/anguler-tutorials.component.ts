import { Component } from '@angular/core';

@Component({
  selector: 'app-anguler-tutorials',
  template: `
   
    <nav>
  <ul>
    <li>
      <a routerLink="pipe-examples" routerLinkActive="active">Pipe Examples</a> &nbsp;
      <a routerLink="directives-examples" routerLinkActive="active">Directives Examples</a> &nbsp;
      <!-- <a routerLink="pageNotFound" routerLinkActive="active">PageNotFound</a> &nbsp; -->
    </li>
  </ul>
</nav>

<router-outlet></router-outlet>
<h1>Anguler Tutorials Component</h1>

  `,
  styles: [
  ]
})
export class AngulerTutorialsComponent {

}
