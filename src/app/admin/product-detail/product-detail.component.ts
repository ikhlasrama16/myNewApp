import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
 selector: 'app-product-detail',
 templateUrl: './product-detail.component.html',
 styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  userData: any ={}
 constructor(
   public dialogRef:MatDialogRef<ProductDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   public api: ApiService,
   public db:AngularFirestore,
   public auth:AngularFireAuth,
   public router:Router,
 )
 {
 
 }
 ngOnInit(): void {
   this.auth.user.subscribe(res=>{
     this.userData = res;
   });
 }
 loading:boolean | undefined;
 saveData()
 {
  this.loading=true;
  if(this.data.id== undefined)
  {
  let doc = new Date().getTime().toString();
  this.data.uid= this.userData.uid;
  this.db.collection('data').doc(doc).set(this.data).then(res=>{
    this.loading = false;
  }).catch(err=>{
    console.log(err);
    this.loading = false;
    alert('Tidak Dapat menyimpan data')
  })
  }else{
    this.db.collection('data').doc(this.data.id).update(this.data).then(res=>{
      this.loading = false;
    }).catch(err=>{
      console.log(err);
      this.loading = false;
      alert('Tidak Dapat menyimpan data')
    })
    this.router.navigate(['admin/product']);
  }
 }
}