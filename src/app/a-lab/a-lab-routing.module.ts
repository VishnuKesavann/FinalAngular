import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLabComponent } from './list-lab/list-lab.component';
import { AddLabComponent } from './add-lab/add-lab.component';
import { UpdateLabComponent } from './update-lab/update-lab.component';

const routes: Routes = [
  {path:'list-lab',component:ListLabComponent},
  {path:'add-lab',component:AddLabComponent},
  {path:'update-lab/:labId',component:UpdateLabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ALabRoutingModule { }
