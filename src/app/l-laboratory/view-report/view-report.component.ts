import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabReportVMService } from 'src/app/shared/lab-report-vm.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit {

  constructor(public LReportVM:LabReportVMService, private router : Router) { }

  ngOnInit(): void {
  }
  printLabReport() {
    // You can implement the print logic here
    alert('Please connect the printer.');
    window.print();
  }
  goBack() {
    this.router.navigate(['/labtech/report']);
  }

}
