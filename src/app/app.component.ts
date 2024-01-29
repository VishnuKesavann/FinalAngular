import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from './shared/userlogin.service';
import {AppointmentService} from 'src/app/shared/appointment.service'
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'FinalCMSProject';
  
  constructor(private router: Router,public userLoginService:UserloginService,private appointmentService:AppointmentService) { 
    this.appointmentService.cancelAppointments().subscribe(
      response=>{
        console.log('Appointments Cancelled',response);
      },error=>{
        console.error('Error cancelling appointments',error);
      }
    );
  }

  logout() {
    this.router.navigate(["login/userlogin"]);
    this.userLoginService.isLogin=false;
  }
  
}
