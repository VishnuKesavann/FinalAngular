import { Component, OnInit } from '@angular/core';
import {PatientService} from 'src/app/shared/patient.service'
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  constructor(public patientservice:PatientService) { }

  ngOnInit(): void {
     console.log('Welcome to List Life Cycle Hook');
     this.patientservice.BindListPatients();
  }

}
