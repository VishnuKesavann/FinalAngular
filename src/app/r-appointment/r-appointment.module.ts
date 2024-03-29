import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAppointmentRoutingModule } from './r-appointment-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { RPatientModule } from '../r-patient/r-patient.module';
import {NgxPaginationModule} from 'ngx-pagination'
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppointmentComponent, BookappointmentComponent, BillGenerationComponent, ListAppointmentComponent],
  imports: [
    CommonModule,
    RAppointmentRoutingModule,
    NgxPaginationModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,ReactiveFormsModule,
    RPatientModule,
    ReactiveFormsModule,MatNativeDateModule
  ]
})
export class RAppointmentModule { }
