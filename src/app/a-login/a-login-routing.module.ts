import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'userlogin',component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ALoginRoutingModule { }
