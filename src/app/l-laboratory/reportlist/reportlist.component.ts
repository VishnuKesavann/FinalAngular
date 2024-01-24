import { Component, OnInit } from '@angular/core';
import { LabReportVMService}from 'src/app/shared/lab-report-vm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.scss']
})
export class ReportlistComponent implements OnInit {

  constructor(public LReportVM:LabReportVMService,
    private router : Router) { }

  ngOnInit(): void {
    console.log('welcome to life cycle hook');
    this.LReportVM.BindListReport();
  }
  generateReport() {
     // Assuming you want to pre-fill some fields in labreportService.formData_L
     

  // Navigate to the lab report form
  this.router.navigate(['/labtech/bill'])
  }
  ViewReport(lab:any){
    this.LReportVM.formData_L.ReportId = lab.ReportId;
     this.LReportVM.formData_L.ReportDate = lab.ReportDate;
     this.LReportVM.formData_L.PatientName = lab.PatientName;
     this.LReportVM.formData_L.TestName = lab.TestName;
     this.LReportVM.formData_L.LowRange = lab.LowRange;
     this.LReportVM.formData_L.HighRange = lab.HighRange;
     this.LReportVM.formData_L.TestResult = lab.TestResult;
     this.LReportVM.formData_L.Remarks = lab.Remarks;
     
    this.router.navigate(['/labtech/view'])

  }
  

}
