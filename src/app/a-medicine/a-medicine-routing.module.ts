import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [
  {path:'list-medicine',component:ListMedicineComponent},
  {path:'add-medicine',component:AddMedicineComponent},
  {path:'update-medicine/:MedicineId',component:UpdateMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AMedicineRoutingModule { }
