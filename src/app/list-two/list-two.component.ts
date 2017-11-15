import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../http-request/data.service';

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListTwoComponent implements OnInit {
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
