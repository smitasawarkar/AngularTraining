import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NumberPipeComponent } from './number-pipe/number-pipe.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { SlicePipeComponent } from './slice-pipe/slice-pipe.component';
import { jsonpipeComponent } from './jsonpipe/jsonpipe.component';
import { ReverseStrPipe } from './reverse-str-pipe/reverse-str-pipe.component';
import { HTTPExampleComponent } from './httpexample/httpexample.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NumberPipeComponent,
    DatePipeComponent,
    SlicePipeComponent,
    jsonpipeComponent,
    ReverseStrPipe,
    HTTPExampleComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
