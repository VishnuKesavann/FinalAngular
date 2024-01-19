import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLabComponent } from './list-lab/list-lab.component';

const routes: Routes = [
  {path:'list-lab',component:ListLabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ALabRoutingModule { }
