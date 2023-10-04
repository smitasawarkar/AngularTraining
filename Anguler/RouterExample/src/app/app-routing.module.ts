import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngulerTutorialsComponent } from './anguler-tutorials/anguler-tutorials.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
  path: 'home',
  component: HomeComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'Product',
  component: ProductComponent,
},

{
  path: 'angulertutorials',
  component: AngulerTutorialsComponent,
  children: [
    {
    path :'pipe-examples',
    component: PipeExamplesComponent
    },
    {
      path:'directives-examples',
      component: DirectiveExamplesComponent

    }
  ]
},
{
  path: '**',
  component: PageNotFoundComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
