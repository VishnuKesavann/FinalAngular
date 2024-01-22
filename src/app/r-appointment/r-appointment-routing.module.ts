import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';

const routes: Routes = [
  {path:'book-appointment/:PatientId',component:BookappointmentComponent},
  {path:'bill-generation/:BillId',component:BillGenerationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RAppointmentRoutingModule { }
