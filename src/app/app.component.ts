import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from './shared/userlogin.service';
import {AppointmentService} from 'src/app/shared/appointment.service'
import { error } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'FinalCMSProject';
  roleId: number;
  roleIdAssigned:boolean;
  roleIdSubscription: Subscription;
  constructor(private router: Router,public userLoginService:UserloginService,private appointmentService:AppointmentService) { 
    this.appointmentService.cancelAppointments().subscribe(
      response=>{
        console.log('Appointments Cancelled',response);
      },error=>{
        console.error('Error cancelling appointments',error);
      }
    );
  }
  ngOnInit() {
    console.log('ngOnInit is called.');
    // Initialize the roleId based on the initial value or any logic you have
    this.roleId = 0;
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit is called.');
    
      const storedRoleId = localStorage.getItem('ACCESS_ROLE');
      if (storedRoleId) {
        this.roleId = +storedRoleId;
        console.log(this.roleId);
        this.roleIdAssigned = true;
      }
    
  }
  
  // Check if the current route is '/patient/r-home'
  get isCurrentRouteHome(): boolean {
    return this.router.isActive('patient/r-home', true);
  }
  logout() {
    this.router.navigate(["login/userlogin"]);
    this.userLoginService.isLogin=false;
    this.roleIdAssigned=false;
  }
  
}
