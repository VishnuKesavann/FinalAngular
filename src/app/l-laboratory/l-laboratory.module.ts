import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LLaboratoryRoutingModule } from './l-laboratory-routing.module';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LablistComponent } from './lablist/lablist.component';
import { LabaddComponent } from './labadd/labadd.component';



@NgModule({
  declarations: [LaboratoryComponent, LablistComponent, LabaddComponent],
  imports: [
    CommonModule,
    LLaboratoryRoutingModule
  ]
})
export class LLaboratoryModule { }
