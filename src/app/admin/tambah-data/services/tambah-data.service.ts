import { Injectable } from '@angular/core';
import { TambahData } from '../../data-barang/models/tambah-data.model';
@Injectable({
  providedIn: 'root'
})
export class TambahDataService {

  tambahdatas: TambahData[] = [
    {
      id: "1",
      nama: "Supra X",
      beli: "Ya",
      asal: "Pemerintahan",
      kondisi:"baik"
    },
    {
      id: "2",
      nama: "Avanza",
      beli: "Ya",
      asal: "Pemerintahan",
      kondisi:"baik"
    }
  
  ];
  constructor() { }
  
  onGet() {
    return this.tambahdatas;
  }
  onAdd(tambahdata:TambahData) {
    this.tambahdatas.push(tambahdata);
  }
  onGetTambahData(id:any){
    return this.tambahdatas.find(x=>x.id === id);
  }

  
}
