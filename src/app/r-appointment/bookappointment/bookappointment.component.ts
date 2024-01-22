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
  
  minDate:Date=new Date();
  maxDate:Date=new Date();

  constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router,public bookingService:AppointmentViewmodelService,private dateAdapter:DateAdapter<Date>,private cdr: ChangeDetectorRef,private fb:FormBuilder,private toastr:ToastrService) {
      // Set the minimum date to today
      this.minDate = this.dateAdapter.today();

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

    this.bookingService.BindDeparment();
    

  }
  backtoPatientList(){
    this.router.navigate(['/patient/patient-list']);
  }

  //Filtering Specialization By DepartmentId
  onDepartmentChange() {
    console.log("Entering On Department Changes")
    if (this.appointmentForm.get('DepartmentId').value !== 0) {
      const departmentId = this.appointmentForm.get('DepartmentId').value;
  
      this.bookingService.BindSpecializationByDepartmentId(departmentId).subscribe(
        response => {
          console.log('Specializations:', response);
          this.bookingService.specializations = [...response] as Specialization[]; // Create a new array
          this.bookingService.BindDoctorBySpecializationId(this.appointmentForm.get('SpecializationId').value);
        },
        error => {
          console.error('Error fetching specializations: ', error);
        }
      );
    }
  }
  
  onSpecializationChange() {
    if (this.appointmentForm.get('SpecializationId').value !== 0) {
      const specializationId = this.appointmentForm.get('SpecializationId').value;
  
      this.bookingService.BindDoctorBySpecializationId(specializationId).subscribe(
        response => {
          console.log('Doctors:', response);
          this.bookingService.doctorviewModal = [...response] as Doctorviewmodel[]; // Create a new array
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
  
    const selectedDoctorId = this.appointmentForm.get('DoctorId').value;
  
    // Log the current value of selectedDoctorId
    console.log("Selected Doctor ID:", selectedDoctorId);
  
    const selectedDoctor = selectedDoctorId;
    console.log(selectedDoctor);
    if (selectedDoctor && selectedDoctor.DoctorId) {
      // Set the selectedDoctorConsultationFee
      this.selectedDoctorID = selectedDoctor.DoctorId;
      this.selectedDoctorConsultationFee = selectedDoctor.ConsultationFee;
      console.log("Consultation Fee:", selectedDoctor.ConsultationFee);
    } else {
      // Handle the case where the selectedDoctor is not found in the updated list
      console.warn("Invalid selection");
      this.selectedDoctorConsultationFee = null;
      this.selectedDoctor = null;
    }
  }
  
  
  onSubmit(form:FormGroup){

    form.value.PatientId=this.patientId;
    this.appointmentViewModel.PatientId=form.value.PatientId;
    this.appointmentViewModel.DoctorId=this.selectedDoctorID;
    this.appointmentViewModel.AppointmentDate=form.value.AppointmentDate;
    this.appointmentViewModel.ConsultationFee=this.selectedDoctorConsultationFee;

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

      },error=>{
        console.error('Error Booking Appointment:',error);
         // Log the response body for more details
    if (error instanceof HttpErrorResponse && error.error) {
      console.error('Error Details:', error.error);
      this.router.navigate(['patient/patient-list']);
      this.toastr.error(error.error,'Medanta Clinic');
    }
      }
    );
  }
}
