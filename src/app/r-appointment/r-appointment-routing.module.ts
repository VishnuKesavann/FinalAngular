import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';

const routes: Routes = [
  {path:'book-appointment/:PatientId',component:BookappointmentComponent},
  {path:'bill-generation/:BillId',component:BillGenerationComponent},
  {path:'list-appointment',component:ListAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RAppointmentRoutingModule { }
