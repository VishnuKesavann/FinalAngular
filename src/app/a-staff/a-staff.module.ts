import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AStaffRoutingModule } from './a-staff-routing.module';
import { StaffComponent } from './staff/staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [StaffComponent, ListStaffComponent, AddStaffComponent, UpdateStaffComponent],
  imports: [
    CommonModule,
    AStaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(
      {
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
      })
  ]
})
export class AStaffModule { }
