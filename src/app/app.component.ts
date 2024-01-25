import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'FinalCMSProject';
  constructor(private router: Router) { }

  logout() {
    this.router.navigate(["login/userlogin"]);

  }
}
