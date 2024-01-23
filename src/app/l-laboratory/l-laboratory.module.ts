import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LLaboratoryRoutingModule } from './l-laboratory-routing.module';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LablistComponent } from './lablist/lablist.component';
import { LabaddComponent } from './labadd/labadd.component';
import { FormsModule } from '@angular/forms';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { BillComponent } from './bill/bill.component';
import { ViewReportComponent } from './view-report/view-report.component';


@NgModule({
  declarations: [LaboratoryComponent, LablistComponent, LabaddComponent, ReportlistComponent, BillComponent, ViewReportComponent],
  imports: [
    CommonModule,
    LLaboratoryRoutingModule,
    FormsModule
  ]
})
export class LLaboratoryModule { }
