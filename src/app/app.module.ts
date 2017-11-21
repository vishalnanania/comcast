import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './http-request/data.service';
import { ListOneComponent } from './list-one/list-one.component';
import { HeaderComponent } from './header/header.component';
import { ListTwoComponent } from './list-two/list-two.component';

import { AppRoutingModule } from './app.routing.module';
import { SortingPipe } from './shared/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListOneComponent,
    HeaderComponent,
    ListTwoComponent,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
