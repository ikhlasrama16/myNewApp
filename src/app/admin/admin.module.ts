import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { EditComponent } from './data/edit/edit.component';
import { RegisterComponent } from '../auth/register/register.component';



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
        path:'data',
        component:DataComponent
      },
      {
        path:'data/add/:id',
        component:EditComponent
      },
      {
        path:'data/edit/:id',
        component:EditComponent
      }
      
    ]
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DataComponent,
    EditComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
