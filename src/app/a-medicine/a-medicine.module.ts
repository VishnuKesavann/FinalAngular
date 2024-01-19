import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AMedicineRoutingModule } from './a-medicine-routing.module';
import { MedicineComponent } from './medicine/medicine.component';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';


@NgModule({
  declarations: [MedicineComponent, ListMedicineComponent],
  imports: [
    CommonModule,
    AMedicineRoutingModule
  ]
})
export class AMedicineModule { }
