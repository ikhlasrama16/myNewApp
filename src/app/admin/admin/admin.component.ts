import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isSingedIn = true
  @Output() isLogout = new EventEmitter<void>()

  constructor(public apiService:ApiService, public router:Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.apiService.logout()
    this.isLogout.emit()
    this.router.navigate(['/login']);
  }
  handleLogout(){
    this.isSingedIn = false
  }

}
