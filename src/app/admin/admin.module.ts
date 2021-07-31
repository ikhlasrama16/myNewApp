import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ImageComponent } from './image/image.component';
import { BeritaComponent } from './berita/berita.component';
import { DashboardComponent } from './dashboard/dashboard.component';



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
        path:'product',
        component:ProductComponent
      },
      {
        path:'berita',
        component:BeritaComponent
      },
      {
        path:'image',
        component:ImageComponent
      }
    ]
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    
    ProductComponent,
    ProductDetailComponent,
    ImageComponent,
    BeritaComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
