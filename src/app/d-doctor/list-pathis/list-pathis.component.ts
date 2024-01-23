import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatienthisService } from 'src/app/shared/patienthis.service';

@Component({
  selector: 'app-list-pathis',
  templateUrl: './list-pathis.component.html',
  styleUrls: ['./list-pathis.component.scss']
})
export class ListPathisComponent implements OnInit {


  PatientId : number;

  constructor(public pathistory : PatienthisService, public router : Router, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.PatientId = this.route.snapshot.params['PatientId'];
    this.pathistory.BindListHistory(this.PatientId);
    //console.log(this.pathistory.BindListHistory(this.PatientId))
  }

  back(){
    this.router.navigateByUrl("doctor/detail/");
      }

}
