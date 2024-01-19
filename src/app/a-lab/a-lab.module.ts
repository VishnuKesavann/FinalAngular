import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ALabRoutingModule } from './a-lab-routing.module';
import { LabComponent } from './lab/lab.component';
import { ListLabComponent } from './list-lab/list-lab.component';
//import { ListLabComponent } from './lab/list-lab/list-lab.component';


@NgModule({
  declarations: [LabComponent, ListLabComponent],
  imports: [
    CommonModule,
    ALabRoutingModule
  ]
})
export class ALabModule { }
