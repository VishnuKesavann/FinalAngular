import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PatientService} from 'src/app/shared/patient.service'
import { ConfirmationDailogComponent } from '../confirmation-dailog/confirmation-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import {  ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  
  showDisablePatient:boolean=false;
  page:number=1;
  searchForm:FormGroup;
  phoneNumber:number;
  
  constructor(public patientservice:PatientService,private router:Router,private dialog: MatDialog,private toastr:ToastrService,private route:ActivatedRoute ,private formbuilder:FormBuilder ) { }

  ngOnInit(): void {
     console.log('Welcome to List Life Cycle Hook');
     this.showDisablePatient=this.route.snapshot.routeConfig.path==='disabledpatient-list'
     this.showDisablePatient ? this.patientservice.BindDisabledPatientRecords() : this.patientservice.BindListPatients();//if true show the disable-patient records else list active patient
      this.searchForm=this.formbuilder.group({
        searchCriteria:['']
      });
    }
    //Search Patient Records
    searchPatients() {
      const criteria = this.searchForm.get('searchCriteria').value;
  
      // Determine if the criteria is a register number or phone number
      const isRegisterNumber =
        /\d/.test(criteria) && /[a-zA-Z]/.test(criteria);
      const isPhoneNumber = /^\d+$/.test(criteria);
      if (!criteria) {
        // Reload the default list
        this.showDisablePatient
          ? this.patientservice.BindDisabledPatientRecords()
          : this.patientservice.BindListPatients();
        return;
      }
      if(!this.showDisablePatient){
        if (isRegisterNumber) {
          this.phoneNumber = 0;
          // Search by register number
          this.patientservice.searchPatients(criteria, this.phoneNumber).subscribe(
            (searchResults) => {
              this.patientservice.patients = searchResults;
            },
            (error) => {
              console.error('Error searching patients:', error);
              this.toastr.error(error.error,'Medanta Clinic');
            }
          );
        } else if (isPhoneNumber) {
          // Search by phone number
          const phoneNumber = +criteria; // Convert to number
          this.patientservice.searchPatients(null, phoneNumber).subscribe(
            (searchResults) => {
              this.patientservice.patients = searchResults;
            },
            (error) => {
              console.error('Error searching patients:', error);
              this.toastr.error(error.error,'Medanta Clinic');
            }
          );
        } else {
          // Handle invalid input or provide appropriate feedback to the user
          console.log(
            'Invalid input. Please enter a valid register number or phone number.'
          );
          this.toastr.error('Invalid input. Please enter a valid register number or phone number.','Medanta Clinic');
        }
      }
      else if(this.showDisablePatient){
        if (isRegisterNumber) {
          this.phoneNumber = 0;
          // Search by register number
          this.patientservice.searchDisabledPatients(criteria, this.phoneNumber).subscribe(
            (searchResults) => {
              this.patientservice.patients = searchResults;
            },
            (error) => {
              console.error('Error searching patients:', error);
              this.toastr.error(error.error,'Medanta Clinic');
            }
          );
        } else if (isPhoneNumber) {
          // Search by phone number
          const phoneNumber = +criteria; // Convert to number
          this.patientservice.searchDisabledPatients(null, phoneNumber).subscribe(
            (searchResults) => {
              this.patientservice.patients = searchResults;
            },
            (error) => {
              console.error('Error searching patients:', error);
              this.toastr.error(error.error,'Medanta Clinic');
            }
          );
        } else {
          // Handle invalid input or provide appropriate feedback to the user
          console.log(
            'Invalid input. Please enter a valid register number or phone number.'
          );
          this.toastr.error('Invalid input. Please enter a valid register number or phone number.','Medanta Clinic');
        }
      }
     
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
  
  const confirmationMessage = this.showDisablePatient
  ? 'Do you really want to enable this patient record?'
  : 'Do you really want to disable this patient record?';

const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
  width: '500px',
  data: { message: confirmationMessage }
});

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      if(this.showDisablePatient){
        this.enablePatientRecords(patientId);
      }
      else
      {
        // User clicked Confirm
      this.disablePatientRecords(patientId);
      
      }  
      
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

//enabling the Patient Records
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
//bookAppointment
bookAppointment(PatientId:number){
  console.log("Booking Appointment");
  this.router.navigate(['/appointment/book-appointment',PatientId]);
}
  
}
