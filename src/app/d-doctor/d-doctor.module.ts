import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDoctorRoutingModule } from './d-doctor-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { ListTodayappComponent } from './list-todayapp/list-todayapp.component';
import { ListPatdetailComponent } from './list-patdetail/list-patdetail.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';
import { FormsModule } from '@angular/forms';
import { ListPathisComponent } from './list-pathis/list-pathis.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [DoctorComponent, ListTodayappComponent, ListPatdetailComponent, AddDiagnosisComponent, ListPathisComponent],
  imports: [
    CommonModule,
    DDoctorRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class DDoctorModule { }
