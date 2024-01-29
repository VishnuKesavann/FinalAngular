import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStaffComponent } from './list-staff/list-staff.component';
//import { StaffDetailsViewModelService } from '../Shared/staff-details-view-model.service';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';

const routes: Routes = [
  {path:'list-staff',component:ListStaffComponent},
  {path:'add-staff',component:AddStaffComponent},
  {path:'update-staff/:staffId',component:UpdateStaffComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AStaffRoutingModule { }
