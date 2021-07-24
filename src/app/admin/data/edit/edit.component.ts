import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:any;
  header:any;
  data:Data = {
    id:'',
    nama:'',
    kode:'',
    identitas:'',
    ket:''
  }
  constructor(private router: Router,private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? 'Tambahkan Data': 'Edit Data';

    if(this.id !=0){
      this.data = this.dataService.onGetData(this.id);
    }
  }
  onSubmit(form: NgForm){
    let data: Data = {
      id: form.value.id,
      nama: form.value.nama,
      kode: form.value.kode,
      identitas: form.value.identitas,
      ket: form.value.ket
    }

    if(this.id === 0){
      this.dataService.onAdd(data);
    }else{
      this.dataService.onUpdate(data);
    }
    
    this.router.navigateByUrl('/admin/data');
  }

}
