import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LablistComponent } from './lablist/lablist.component';


const routes: Routes = [
{path: 'lablist',component:LablistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LLaboratoryRoutingModule { }
