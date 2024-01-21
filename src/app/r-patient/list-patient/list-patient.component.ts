import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PatientService} from 'src/app/shared/patient.service'
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  constructor(public patientservice:PatientService,private router:Router) { }

  ngOnInit(): void {
     console.log('Welcome to List Life Cycle Hook');
     this.patientservice.BindListPatients();
  }
  //Edit Patient Records
  updatePatient(PatientId:number){
    console.log(PatientId);
    this.router.navigate(['/patient/edit-patient',PatientId]);
  }
  //Details Patient Records
  detailsPatient(PatientId:number){
    console.log(PatientId);
    this.router.navigate(['/patient/details-patient',PatientId]);
  }
}
