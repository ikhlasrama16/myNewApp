import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { DataBarangComponent } from './data-barang/data-barang.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';


const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'data-barang',
        component:DataBarangComponent
      },
      {
        path:'tambah-data',
        component:TambahDataComponent
      }
      
    ]
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DataBarangComponent,
    TambahDataComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
