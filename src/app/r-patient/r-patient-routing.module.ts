import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { DisabledPatientListComponent } from './disabled-patient-list/disabled-patient-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'patient-list',component:ListPatientComponent},
  {path:'patient-add',component:AddPatientComponent},
  {path:'edit-patient/:PatientId',component:EditPatientComponent},
  {path:'details-patient/:PatientId',component:DetailsPatientComponent},
  {path:'disabledpatient-list',component:DisabledPatientListComponent},
  {path:'r-home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RPatientRoutingModule { }
