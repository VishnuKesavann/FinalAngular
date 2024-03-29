import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm ,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import { PatientService } from 'src/app/shared/patient.service';
import {AppointmentViewmodelService} from 'src/app/shared/appointment-viewmodel.service'
import { Specialization } from 'src/app/shared/specialization';
import { error } from '@angular/compiler/src/util';
import { Doctorviewmodel } from 'src/app/shared/doctorviewmodel';
import { DateAdapter } from '@angular/material/core';
import { AppointmentViewmodel } from 'src/app/shared/appointment-viewmodel';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.scss']
})
export class BookappointmentComponent implements OnInit {
  appointmentForm:FormGroup;
  patientId:number;
  Patient_d:Patient=new Patient();
  appointmentViewModel:AppointmentViewmodel=new AppointmentViewmodel();
  selectedDoctor: Doctorviewmodel | null = null;
  selectedDoctorID:number|null=null;
  selectedDoctorConsultationFee: number | null = null;
  isNewPatient:boolean=false;
  specializations:any[]=[];
  doctors:any[]=[];
  
  
  minDate:Date=new Date();
  maxDate:Date=new Date();
  // Use BehaviorSubject to store the doctors and initialize with an empty array
  private doctorsSubject = new BehaviorSubject<Doctorviewmodel[]>([]);
  // Expose the doctors as an observable
  doctors$ = this.doctorsSubject.asObservable();
  constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router,public bookingService:AppointmentViewmodelService,private dateAdapter:DateAdapter<Date>,private cdr: ChangeDetectorRef,private fb:FormBuilder,private toastr:ToastrService) {
      // Set the minimum date to today
      this.minDate = this.dateAdapter.today();
      this.minDate.setHours(0, 0, 0, 0);
      console.log(this.minDate);
      // Set the maximum date to 2 weeks from today
      this.maxDate = new Date();
      this.maxDate.setDate(this.maxDate.getDate() + 14);
        // Initialize the form group
    this.appointmentForm = this.fb.group({
      DepartmentId: [null, Validators.required],
      SpecializationId: [null, Validators.required],
      DoctorId: [null, Validators.required],
      AppointmentDate: [null, Validators.required],
    });
    
   }

  ngOnInit(): void {
    this.patientId=this.route.snapshot.params['PatientId'];
    // Retrieve isNewPatient from query parameters
  this.isNewPatient = this.route.snapshot.queryParams['isNewPatient'] === 'true';
  console.log(this.isNewPatient);
    console.log("Populating(details)");
    console.log(this.patientId);
    
    //subscriber
    this.patientService.getPatient(this.patientId).subscribe(
      data=>
      {
        console.log(data);
        this.Patient_d=data;

        var datePipe=new DatePipe('en-UK');
        let formatedyear:any=datePipe.transform(data.PatientDob,'yyyy-MM-dd');
        data.PatientDob=formatedyear;

        this.patientService.formData_P=Object.assign({},data);
        console.log(FormData);
      },error=>console.log(error)
    );
    this.bookingService.departments=null;
    this.bookingService.BindDeparment();
    

  }
  backtoPatientList(){
    this.router.navigate(['/patient/patient-list']);
  }

  //Filtering Specialization By DepartmentId
  onDepartmentChange() {
    this.specializations=[];
    console.log("Entering On Department Changes")
    if (this.appointmentForm.get('DepartmentId').value !== 0) {
      const departmentId = this.appointmentForm.get('DepartmentId').value;
  
      this.bookingService.BindSpecializationByDepartmentId(departmentId).subscribe(
        response => {
          console.log('Specializations:', response);
          this.bookingService.specializations = [...response] as Specialization[]; // Create a new array
          this.specializations=this.bookingService.specializations;
          this.bookingService.BindDoctorBySpecializationId(this.appointmentForm.get('SpecializationId').value);
          this.doctors=[];
        },
        error => {
          console.error('Error fetching specializations: ', error);
        }
      );
    }
  }
  
  onSpecializationChange() {
    console.log("specializaiton changes")
    if (this.appointmentForm.get('SpecializationId').value !== 0) {
      const specializationId = this.appointmentForm.get('SpecializationId').value;
  
      this.bookingService.BindDoctorBySpecializationId(specializationId).subscribe(
        response => {
          console.log('Doctors:', response);
          this.bookingService.doctorviewModal = [...response] as Doctorviewmodel[]; // Create a new array
          this.doctors=this.bookingService.doctorviewModal;
          this.selectedDoctor = null; // Reset the selected doctor when specialization changes
          // Trigger change detection
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error fetching doctors: ', error);
        }
      );
    } else {
      // Reset the doctor dropdown when SpecializationId is 0
      this.bookingService.doctorviewModal = [];
      this.selectedDoctor = null;
      // Trigger change detection
      this.cdr.detectChanges();
    }
  } 
  onDoctorChange() {
    console.log("Doctor change");
  
    const selectedDoctor = this.appointmentForm.get('DoctorId').value;
    
    // Log the current value of selectedDoctor
    console.log("Selected Doctor:", selectedDoctor);
  
    if (selectedDoctor) {
      // Set the selectedDoctorConsultationFee
      this.selectedDoctorID = selectedDoctor.DoctorId;
      this.selectedDoctorConsultationFee = selectedDoctor.ConsultationFee;
      console.log("Doctor ID:", selectedDoctor.DoctorId);
      console.log("Consultation Fee:", selectedDoctor.ConsultationFee);
    } else {
      // Handle the case where the selectedDoctor is not found in the updated list
      console.warn("Invalid selection");
      this.selectedDoctorConsultationFee = null;
      this.selectedDoctor = null;
    }
  }
  
  
  
  onSubmit(form:FormGroup){
    // Add one day to the selected date
 // Ensure that form.value.AppointmentDate is a valid date string or Date object
 const selectedDate: any = form.value.AppointmentDate;

 // Create a Date object from the selectedDate
 const currentDate = new Date(selectedDate);

 // Check if currentDate is a valid Date object
 if (!isNaN(currentDate.getTime())) {
   // Add one day to the selected date
   currentDate.setDate(currentDate.getDate() + 1);
    form.value.PatientId=this.patientId;
    this.appointmentViewModel.PatientId=form.value.PatientId;
    this.appointmentViewModel.DoctorId=this.selectedDoctorID;
    this.appointmentViewModel.AppointmentDate= currentDate;
    this.appointmentViewModel.ConsultationFee=this.selectedDoctorConsultationFee;
  }else {
    // Handle the case where the date is not valid
    console.error('Invalid date:', selectedDate);
  }
    console.log(this.appointmentViewModel.AppointmentDate);
    console.log(this.isNewPatient);
    console.log(form.value.PatientId);
    console.log(form.value);
    console.log(this.appointmentViewModel);
    this.bookingService.insertAppointmentandBill(this.appointmentViewModel,this.isNewPatient).subscribe(
      response=>
      {
        console.log(response);
        this.appointmentViewModel=response as AppointmentViewmodel;
        console.log(response.ConsultationFee)
        console.log('Appointment Booked');
        this.router.navigate(['appointment/bill-generation',this.appointmentViewModel.BillId]);
        this.toastr.success('Appointment Booked Successfully','Medanta Clinic');
        this.bookingService.departments=null;
      },error=>{
        console.error('Error Booking Appointment:',error);
         // Log the response body for more details
    if (error instanceof HttpErrorResponse && error.error) {
      console.error('Error Details:', error.error);
      this.router.navigate(['patient/patient-list']);
      this.toastr.error(error.error,'Medanta Clinic');
      this.bookingService.departments=null;
    }

      }
    );
  }
}
