import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PatientService} from 'src/app/shared/patient.service'
import { ConfirmationDailogComponent } from '../confirmation-dailog/confirmation-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import {  ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  showDisablePatient:boolean=false;
  constructor(public patientservice:PatientService,private router:Router,private dialog: MatDialog,private toastr:ToastrService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
     console.log('Welcome to List Life Cycle Hook');
     this.showDisablePatient=this.route.snapshot.routeConfig.path==='disabledpatient-list'
     this.showDisablePatient ? this.patientservice.BindDisabledPatientRecords() : this.patientservice.BindListPatients();//if true show the disable-patient records else list active patient
  }
  //Edit Patient Records
  updatePatient(PatientId:number){
    console.log(PatientId);
    this.router.navigate(['/patient/edit-patient',PatientId]);
  }
  //Details Patient Records
  detailsPatient(PatientId:number){
    console.log(PatientId);
    this.router.navigate(['/patient/details-patient',PatientId]);
  }
// Open confirmation dialog
openConfirmationDialog(patientId: number): void {
  const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
    width: '500px',
    data: { message: 'Do you really want to disable this patient record?' }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // User clicked Confirm
      this.disablePatientRecords(patientId);
    }
  });
}
//Disabling the Patient Records
disablePatientRecords(patientId: number) {
  console.log('Disabling patient records for ID:', patientId);

  this.patientservice.disablePatient(patientId).subscribe(
    response => {
      console.log('Patient records disabled successfully:', response);
      this.toastr.success('Disabled the Patient Record Successfully', 'Medanta Clinic');
      
      // Reload the current route
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]);
    },
    error => {
      console.error('Error disabling patient records:', error);
      this.toastr.error('Error disabling Patient Record', 'Medanta Clinic');
      // Handle error as needed
    }
  );
}

//Disabling the Patient Records
enablePatientRecords(patientId: number) {
  console.log('enabling patient records for ID:', patientId);

  this.patientservice.enablePatient(patientId).subscribe(
    response => {
      console.log('Patient records enabled successfully:', response);
      this.toastr.success('Enabled the Patient Record Successfully', 'Medanta Clinic');
      
      // Reload the current route
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]);
    },
    error => {
      console.error('Error Enabling patient records:', error);
      this.toastr.error('Error Enabling Patient Record', 'Medanta Clinic');
      // Handle error as needed
    }
  );
}
  
  
}
