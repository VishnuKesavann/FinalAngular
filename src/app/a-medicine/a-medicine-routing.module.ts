import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';

const routes: Routes = [
  {path:'list-medicine',component:ListMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AMedicineRoutingModule { }
