import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AMedicineRoutingModule } from './a-medicine-routing.module';
import { MedicineComponent } from './medicine/medicine.component';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [MedicineComponent, ListMedicineComponent, AddMedicineComponent, UpdateMedicineComponent],
  imports: [
    CommonModule,
    AMedicineRoutingModule,
    FormsModule,
    RouterModule,
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
export class AMedicineModule { }
