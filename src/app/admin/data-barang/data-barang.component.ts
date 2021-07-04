import { Component, OnInit } from '@angular/core';
import { TambahData } from './models/tambah-data.model';
import { TambahDataService } from '../tambah-data/services/tambah-data.service';



@Component({
  selector: 'app-data-barang',
  templateUrl: './data-barang.component.html',
  styleUrls: ['./data-barang.component.scss']
})
export class DataBarangComponent implements OnInit {
  tambahdatas: TambahData[];
  constructor(private tambahdataService:TambahDataService) { 
    this.tambahdatas =[]
  }

  ngOnInit(): void {
    this.tambahdatas = this.tambahdataService.onGet();
  }

  
}

