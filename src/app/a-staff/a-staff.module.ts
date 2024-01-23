import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AStaffRoutingModule } from './a-staff-routing.module';
import { StaffComponent } from './staff/staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StaffComponent, ListStaffComponent, AddStaffComponent],
  imports: [
    CommonModule,
    AStaffRoutingModule,
    FormsModule
  ]
})
export class AStaffModule { }
