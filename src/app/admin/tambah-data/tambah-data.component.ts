import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TambahData } from '../data-barang/models/tambah-data.model';

import { TambahDataService } from './services/tambah-data.service';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.scss']
})
export class TambahDataComponent implements OnInit {
  id: any;
  header:any;
  tambahdata: TambahData = {
    id:0,
    nama:'',
    beli:'',
    asal:'',
    kondisi:''
    
  }
  constructor(private router:Router, private route:ActivatedRoute, private tambahdataService:TambahDataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id ==0? 'add tambahdata':'edit tambahdata';

    

  }
  onSubmit(form:NgForm) {

    let tambahdata: TambahData = {
      id:form.value.id,
      nama: form.value.nama,
      beli: form.value.beli,
      asal: form.value.asal,
      kondisi: form.value.kondisi
    }
    this.tambahdataService.onAdd(tambahdata);
    this.router.navigateByUrl('/admin/data-barang');
  }
}
