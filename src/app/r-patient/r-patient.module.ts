import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RPatientRoutingModule } from './r-patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';


@NgModule({
  declarations: [PatientComponent, ListPatientComponent],
  imports: [
    CommonModule,
    RPatientRoutingModule
  ]
})
export class RPatientModule { }
