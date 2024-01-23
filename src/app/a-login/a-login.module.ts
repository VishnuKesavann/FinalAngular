import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ALoginRoutingModule } from './a-login-routing.module';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, UserloginComponent],
  imports: [
    CommonModule,
    ALoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class ALoginModule { }
