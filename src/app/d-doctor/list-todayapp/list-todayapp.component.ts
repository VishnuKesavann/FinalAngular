import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodayappService } from 'src/app/shared/todayapp.service';
 
@Component({
  selector: 'app-list-todayapp',
  templateUrl: './list-todayapp.component.html',
  styleUrls: ['./list-todayapp.component.scss']
})
export class ListTodayappComponent implements OnInit {

  constructor(public todayapp:TodayappService, private router: Router) { }

  ngOnInit(): void {
    this.todayapp.BindListAppointment();
  }

  goto(AppointmentId : number){
this.router.navigate(["doctor/detail", AppointmentId]);
  }

}
