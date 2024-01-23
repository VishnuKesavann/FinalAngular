import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LablistComponent } from './lablist/lablist.component';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { LabaddComponent} from './labadd/labadd.component'
import { BillComponent } from './bill/bill.component';
import { ViewReportComponent } from './view-report/view-report.component';

const routes: Routes = [
{path: 'lablist',component:LablistComponent},
{path:'report',component:ReportlistComponent},
{path:'add', component:LabaddComponent},
{path:'bill',component:BillComponent},
{path:'view',component:ViewReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LLaboratoryRoutingModule { }
