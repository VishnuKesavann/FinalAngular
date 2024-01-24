import { Component, OnInit } from '@angular/core';
import { BillviewmodelService } from 'src/app/shared/billviewmodel.service';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmationDailogComponent} from 'src/app/r-patient/confirmation-dailog/confirmation-dailog.component'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent implements OnInit {
  page:number=1;
  constructor(public billviewmodelService:BillviewmodelService,public dialog: MatDialog,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.billviewmodelService.BindAppointments();
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


  cancelAppointment(AppointmentId:number){
    this.billviewmodelService.CancelAppointments(AppointmentId).subscribe(
      response => {
        console.log('Patient records disabled successfully:', response);
        this.toastr.success('Cancel the Patient Appointment Successfully', 'Medanta Clinic');
        
        // Reload the current route
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
      },error => {
        console.error('Error Canceling patient Appointment:', error);
        this.toastr.error('Error Canceling Patient Appointment', 'Medanta Clinic');
        // Handle error as needed
      }
    );;
}
}
