import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-barang',
  templateUrl: './data-barang.component.html',
  styleUrls: ['./data-barang.component.scss']
})
export class DataBarangComponent implements OnInit {
  value:any={};
  constructor(
    
  ) { }

  ngOnInit(): void {
    this.value={
      nama:'Supra X',
      beli:'Ya',
      asal:'Bengkulu',
      kondisi:'Baik'

    }
  }
}

