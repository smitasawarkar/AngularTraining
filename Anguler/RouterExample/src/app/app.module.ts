import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngulerTutorialsComponent } from './anguler-tutorials/anguler-tutorials.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    AngulerTutorialsComponent,
    PipeExamplesComponent,
    DirectiveExamplesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
