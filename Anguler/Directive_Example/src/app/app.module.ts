import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ChangeTextDirective } from './change-text.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyDateDirectiveDirective } from './my-date-directive.directive';
import { CPColorDirective } from './cpcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveComponent,
    ChangeTextDirective,
    CustomDirectiveComponent,
    MyDirectiveDirective,
    MyDateDirectiveDirective,
    CPColorDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
