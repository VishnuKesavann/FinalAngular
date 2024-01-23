import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ALabRoutingModule } from './a-lab-routing.module';
import { LabComponent } from './lab/lab.component';
import { ListLabComponent } from './list-lab/list-lab.component';
import { AddLabComponent } from './add-lab/add-lab.component';
import { FormsModule } from '@angular/forms';
import { UpdateLabComponent } from './update-lab/update-lab.component';
//import { ListLabComponent } from './lab/list-lab/list-lab.component';


@NgModule({
  declarations: [LabComponent, ListLabComponent, AddLabComponent, UpdateLabComponent],
  imports: [
    CommonModule,
    ALabRoutingModule,
    FormsModule
  ]
})
export class ALabModule { }
