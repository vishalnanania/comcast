import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../http-request/data.service';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListOneComponent implements OnInit {
  dataList: any[];
  isDesc: boolean = false;
  column: string = '';
  direction: number;

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.dataService.getData()
      .subscribe(
        (response) => { this.dataList = response.json(); },
        (error) => { console.log(error)},
    );
  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
}
