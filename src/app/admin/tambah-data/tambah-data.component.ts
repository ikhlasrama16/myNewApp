import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.scss']
})
export class TambahDataComponent implements OnInit {
  onSubmit(value: any){
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
