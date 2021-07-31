import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any ={};
 isSingedIn = false
  constructor(public apiService:ApiService, public router:Router) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('user')!== null)
    this.isSingedIn = true
    else
    this.isSingedIn = false
  }

  async onSignin(user:any){
    await this.apiService.signin(user.email, user.password)
    if (this.apiService.isLoggedIn)
    this.isSingedIn = true
    this.router.navigate(['admin/berita']);
  }
  
  handleLogout(){

  }
}
