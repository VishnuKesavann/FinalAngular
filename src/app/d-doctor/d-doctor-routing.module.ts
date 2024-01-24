import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodayappComponent } from './list-todayapp/list-todayapp.component';
import { ListPatdetailComponent } from './list-patdetail/list-patdetail.component';
import { ListPathisComponent } from './list-pathis/list-pathis.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';

const routes: Routes = [
  { path:'list',component:ListTodayappComponent },
  { path : 'detail/:AppointmentId', component : ListPatdetailComponent},
  { path : 'history/:PatientId', component : ListPathisComponent},
  { path : 'Add/:AppointmentId', component : AddDiagnosisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DDoctorRoutingModule { }
