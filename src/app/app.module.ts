import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './http-request/data.service';
import { ListOneComponent } from './list-one/list-one.component';
import { ListOnePipe } from './list-one/list-one.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListOneComponent,
    ListOnePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
