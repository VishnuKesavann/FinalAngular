import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from './shared/userlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'FinalCMSProject';
  
  constructor(private router: Router,public userLoginService:UserloginService) { 

  }

  logout() {
    this.router.navigate(["login/userlogin"]);
    this.userLoginService.isLogin=false;
  }
}
