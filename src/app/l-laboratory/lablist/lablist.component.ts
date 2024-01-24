import { Component, OnInit } from '@angular/core';
import {LabtestvmService} from 'src/app/shared/labtestvm.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lablist',
  templateUrl: './lablist.component.html',
  styleUrls: ['./lablist.component.scss']
})
export class LablistComponent implements OnInit {

  constructor(public labtestvmService:LabtestvmService,
    private toastr:ToastrService, 
    private router : Router) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.labtestvmService.BindListEmployee();
  }

  generateReport(lab:any) {
      // Assuming you want to pre-fill some fields in labreportService.formData_L
      this.labtestvmService.formData_L.AppointmentId = lab.AppointmentId;
      this.labtestvmService.formData_L.PatientName = lab.PatientName;
      this.labtestvmService.formData_L.DoctorName = lab.DoctorName;
      this.labtestvmService.formData_L.TestName = lab.TestName;

    // Navigate to the lab report form
    this.router.navigate(['/labtechnician/add',lab]);
  }
  goBack() {
    this.router.navigate(['/labtechnician/']);
  }

}
