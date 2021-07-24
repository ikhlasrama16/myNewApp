import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datas : Data[] = [
    {
      id:1,
      nama:"Meja Kantor",
      kode:"M8080",
      identitas:"Jati",
      ket:"Baik/1 buah"
    },
    {
      id:2,
      nama:"Laptopr",
      kode:"L7069",
      identitas:"Acer",
      ket:"Baik/1 buah"
    }

  ];
  constructor() { }

  onGet(){
    return this.datas;
  }

  onAdd(data: Data){
    this.datas.push(data);
  }
  onGetData(id:number){
    return this.datas.find(x=>x.id === id)
  }

  onDelete(id:any){
    let data = this.datas.find(x=>x.id == id);
    let index = this.datas.indexOf(data,0);
    this.datas.splice(index,1);
  }

  onUpdate(data:Data){
    let oldData = this.datas.find(x=>x.id == data.id);
    oldData.nama = data.nama;
    oldData.kode = data.kode;
    oldData.identitas = data.identitas;
    oldData.ket = data.ket;

  }
}
