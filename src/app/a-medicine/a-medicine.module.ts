import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AMedicineRoutingModule } from './a-medicine-routing.module';
import { MedicineComponent } from './medicine/medicine.component';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';


@NgModule({
  declarations: [MedicineComponent, ListMedicineComponent, AddMedicineComponent],
  imports: [
    CommonModule,
    AMedicineRoutingModule
  ]
})
export class AMedicineModule { }
