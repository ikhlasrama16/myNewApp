import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  title:any;
  datas: Data[];
  constructor(private dataService:DataService) { 
    this.datas=[];
  }
  
  ngOnInit(): void {
    this.title='List Data';
    this.datas = this.dataService.onGet();
  }
  onDelete(id:any){
    this.dataService.onDelete(id);
  }

}
