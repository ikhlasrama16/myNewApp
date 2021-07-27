import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDesign } from './material/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PublicComponent } from './public/public.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    PublicComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyDlXXgkTGPqvJl1Jjl10Og9HNwUp9o7YpA",
      authDomain: "tproject-845e1.firebaseapp.com",
      projectId: "tproject-845e1",
      storageBucket: "tproject-845e1.appspot.com",
      messagingSenderId: "820932151122",
      appId: "1:820932151122:web:d16b674f8b94bc675a1c8b"
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
