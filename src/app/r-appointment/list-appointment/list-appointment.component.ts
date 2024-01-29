import { Component, OnInit } from '@angular/core';
import { BillviewmodelService } from 'src/app/shared/billviewmodel.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDailogComponent } from 'src/app/r-patient/confirmation-dailog/confirmation-dailog.component'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent implements OnInit {
  page: number = 1;
  maxDate: Date;
  minDate: Date;
  constructor(public billviewmodelService: BillviewmodelService, public dialog: MatDialog, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) {
    // Initialize max and min dates
    const currentDate = new Date();
    this.maxDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000); // 2 weeks in milliseconds
    this.minDate = currentDate;
  }
  showSearchByRegisterNumber: boolean = false;
  searchForm: FormGroup;
  filteredAppointments: any[] = [];

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      appointmentDate: [''],
      registerNumber: ['', [Validators.pattern(/^[P]\d{1,6}$/)]]
    });
    this.billviewmodelService.BindAppointments();
  }
  searchAppointments() {
    const appointmentDate = this.searchForm.get('appointmentDate').value;
    const registerNumber = this.searchForm.get('registerNumber').value.toUpperCase();
    console.log(appointmentDate);

    if (!appointmentDate) {
      this.showSearchByRegisterNumber = false;
      this.billviewmodelService.BindAppointments(); // Reload original data
      return;
    }
    
    // Make an API call to your server to perform the search
    this.billviewmodelService.searchAppointmentByAppointmentDate(appointmentDate).subscribe(
      (searchResults) => {

        this.billviewmodelService.bill_rs = searchResults;
        if (this.billviewmodelService.bill_rs.length > 1) {
          this.showSearchByRegisterNumber = true;
          // Check if the register number is valid
          if (!this.searchForm.get('registerNumber').valid && registerNumber.length>=3 ) {
            this.toastr.error('Enter Valid Register Number', 'Medanta Clinic');
            return;
          }
          this.billviewmodelService.searchAppointmentByDateAndRegisterNumber(appointmentDate, registerNumber).subscribe(
            (searchResults) => {
              this.billviewmodelService.bill_rs = searchResults;
            }
          );
          if(!registerNumber && appointmentDate){
            
            return;
          }
        }
        else if (this.billviewmodelService.bill_rs.length < 1) {
          this.toastr.error('No Appointment Exists', 'Medanta Clinic');
        }
      },
      (error) => {
        console.error('Error searching appointments:', error);
        this.toastr.error('Error Server is not responding', 'Medanta Clinic')
      }
    );
  }
  openConfirmationDialog(appointmentId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
      data: { message: 'Are you sure you want to cancel this appointment?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed, implement cancellation logic here
        this.cancelAppointment(appointmentId);
        console.log('Appointment canceled:', appointmentId);
      }
    });
  }


  cancelAppointment(AppointmentId: number) {
    this.billviewmodelService.CancelAppointments(AppointmentId).subscribe(
      response => {
        console.log('Patient records disabled successfully:', response);
        this.toastr.success('Cancel the Patient Appointment Successfully', 'Medanta Clinic');

        // Reload the current route
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
      }, error => {
        console.error('Error Canceling patient Appointment:', error);
        this.toastr.error('Error Canceling Patient Appointment', 'Medanta Clinic');
        // Handle error as needed
      }
    );;
  }
}
