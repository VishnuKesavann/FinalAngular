import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RPatientRoutingModule } from './r-patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component'
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDailogComponent } from './confirmation-dailog/confirmation-dailog.component';
import { DisabledPatientListComponent } from './disabled-patient-list/disabled-patient-list.component';
import {NgxPaginationModule} from 'ngx-pagination'
@NgModule({
  declarations: [PatientComponent, ListPatientComponent, AddPatientComponent, EditPatientComponent, DetailsPatientComponent, ConfirmationDailogComponent, DisabledPatientListComponent],
  imports: [
    CommonModule,
    RPatientRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class RPatientModule { }
