import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientviewService } from 'src/app/shared/patientview.service';
import { TodayappService } from 'src/app/shared/todayapp.service';

@Component({
  selector: 'app-list-patdetail',
  templateUrl: './list-patdetail.component.html',
  styleUrls: ['./list-patdetail.component.scss']
})
export class ListPatdetailComponent implements OnInit {


  AppointmentId : number;

  constructor(public todayapp : TodayappService,  public patientview : PatientviewService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.AppointmentId = this.route.snapshot.params['AppointmentId'];
    this.patientview.BindListDetails(this.AppointmentId);
    this.todayapp.BindListAppointment();
    
  }

  back(){
    this.router.navigateByUrl("doctor/list");
      }

      history(patientId : number){
    this.router.navigate(["doctor/history", patientId]);
  }


  goto(AppointmentId : number) {
    this.router.navigate(["doctor/Add", AppointmentId])

  }
}
