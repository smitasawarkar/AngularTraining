import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { MyComp1Component } from './my-comp1/my-comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HabitListComponent,
    MyComp1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }