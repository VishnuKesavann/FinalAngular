import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LLaboratoryRoutingModule } from './l-laboratory-routing.module';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LabListComponent } from './laboratory/lab-list/lab-list.component';


@NgModule({
  declarations: [LaboratoryComponent, LabListComponent],
  imports: [
    CommonModule,
    LLaboratoryRoutingModule
  ]
})
export class LLaboratoryModule { }
