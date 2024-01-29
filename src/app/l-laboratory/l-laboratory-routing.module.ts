import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LablistComponent } from './lablist/lablist.component';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { LabaddComponent} from './labadd/labadd.component'
import { BillComponent } from './bill/bill.component';
import { ViewReportComponent } from './view-report/view-report.component';

const routes: Routes = [
{path:'list-lab',component:LablistComponent},
{path:'report/:AppointmentId',component:ReportlistComponent},
{path:'add', component:LabaddComponent},
{path:'bill/:ReportId',component:BillComponent},
{path:'view',component:ViewReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LLaboratoryRoutingModule { }
