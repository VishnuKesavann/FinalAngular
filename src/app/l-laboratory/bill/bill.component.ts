import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabReportVMService } from 'src/app/shared/lab-report-vm.service';
import { LabtestvmService } from 'src/app/shared/labtestvm.service';
import{LaboratoryService}from 'src/app/shared/laboratory.service'

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor( private router : Router,public labreportService:LabReportVMService,public labtestvmService:LabtestvmService
    ) { }

  ngOnInit(): void {
  }
  printLabReport() {
    // You can implement the print logic here
    alert('Please connect the printer.');
    window.print();
  }
  goBack() {
    this.router.navigate(['/labtechnician/report']);
  }
  generateReport(lab) {
    
    this.labtestvmService.formData_L.AppointmentId = lab.AppointmentId;
    this.labtestvmService.formData_L.PatientName = lab.PatientName;
    this.labtestvmService.formData_L.TestName = lab.TestName;
   
    
  }

  
}


