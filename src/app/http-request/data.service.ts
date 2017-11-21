import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

 constructor(private http: Http) { }

 //get json data from list
 getData(){
   return this.http.get('assets/json/data.json');
 }

}
