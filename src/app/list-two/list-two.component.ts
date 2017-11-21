import { Component, OnInit } from '@angular/core';

import { DataService } from '../http-request/data.service';

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css']
})
export class ListTwoComponent implements OnInit {
  dataList: any[];
  isDesc: boolean = false;
  column: string = '';
  direction: number;

  constructor(private dataService: DataService){}

  ngOnInit() {
    //assigning data to list after modifing data using map.
    this.dataService.getData()
      .subscribe(
        (response) => {
        var responseData = response.json();
        var modifiedData = [];
        responseData.map((z,i)=> {
          var duplicate = false;
          var modifiedObj = {};
          if(modifiedData.length > 0){
            modifiedData.map((x,index)=>{
              if(x.name == z.name){
              duplicate = true;
              modifiedData[index][z.category]=z.amount;
              }
            });
          }
          if(!duplicate){
            modifiedObj["name"]=z.name;
            modifiedObj[z.category]=z.amount;
            modifiedData.push(modifiedObj);
          }
        });
        this.dataList = modifiedData;
        },
        (error) => { console.log(error)},
    );
  }

  //sorting operation based on property and direction.
  sort(property){
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
}
