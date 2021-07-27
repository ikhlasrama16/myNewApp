import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSingedIn = false
  
  constructor(public apiService:ApiService, public router:Router){}

  ngOnInit(): void {  }
  user: any={};
  async onSignup(user:any){
    await this.apiService.signup(user.email, user.password)
    if (this.apiService.isLoggedIn)
    this.isSingedIn = true
    this.router.navigate(['login']);
  }
}
