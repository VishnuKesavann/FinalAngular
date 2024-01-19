import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabListComponent } from './laboratory/lab-list/lab-list.component';

const routes: Routes = [
{path: 'LabList',component:LabListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LLaboratoryRoutingModule { }
