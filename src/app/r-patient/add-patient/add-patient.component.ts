import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/shared/patient.service';
import { Patient } from 'src/app/shared/patient';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  minDate :Date;
  maxDate = new Date();
  defaultDob: string;
  constructor(public patientService:PatientService, private toastr:ToastrService,private router:Router) 
  {
      this.minDate=new Date();
      this.minDate.setFullYear(this.minDate.getFullYear()-120);
  }

  ngOnInit(): void {
    this.patientService.formData_P=new Patient();//to reset the form
    const defaultDate = new Date(2000, 0, 1); // January 1, 2000
    this.defaultDob = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  }
 
  dateFilter = (date: Date) => {
    // Disable dates after the current date
    return date>=this.minDate && date <= this.maxDate;
  };
  onSubmit(form:NgForm){
    let AddPatientId=this.patientService.formData_P.PatientId;
    if(AddPatientId==0|| AddPatientId==null){
      console.log(form.value);
      this.InsertPatientRecord(form);
    }
    else{
      this.UpdatePatientRecords(form);
    }
  }
  //Inserting Patient Records
  InsertPatientRecord(form:NgForm){
    console.log("Inserting Patient");
    this.patientService.insertPatient(form.value).subscribe(
      (result)=>{
        // Capture the generated PatientId
        const generatedPatientId = result;
        console.log(generatedPatientId);
        // Use the captured PatientId to navigate to the book-appointment page
      this.router.navigate(['appointment/book-appointment', generatedPatientId], {
        queryParams: { isNewPatient: true }
      });
        this.toastr.success('Added Patient Successfully','Medanta Clinic');
        this.resetForm(form);
      }
    )
  }

  //resets the form
  resetForm(form:NgForm){
    if(form!=null) 
    {
      form.resetForm();
    }
    
  }

  //Update Patient Record
  UpdatePatientRecords(form:NgForm){
    console.log("updating");
    console.log(form.value);
    this.patientService.updatePatient(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        this.router.navigateByUrl('patient/patient-list');
        this.toastr.success('Updated Successfully','Medanta Clinic');

      }
    )
  }

  //validation

 // validation-phone Number
 validatePhoneNumber(form: NgForm) {
  const phoneNumberControl = form.controls['PhoneNumber'];
  const isValidPhoneNumber = /^[789]\d{0,9}$/.test(phoneNumberControl.value);

  if (isValidPhoneNumber) {
    phoneNumberControl.setErrors(null);
  } else {
    phoneNumberControl.setErrors({ 'invalidPhoneNumber': true });
  }
}

//validation -Name
validateName(form: NgForm) {
  const nameControl = form.controls['PatientName'];

  // Check if the name starts with a space
  const startsWithSpace = /^\s/.test(nameControl.value);

  // Check if the name contains only whitespace
  const containsOnlyWhitespace = /^\s*$/.test(nameControl.value);

  // Check if the name contains any digit
  const containsDigit = /\d/.test(nameControl.value);
  // Check if the length is within the desired range
    const minLength = 3;
    const maxLength = 25;
    const isLengthValid = nameControl.value.length >= minLength && nameControl.value.length <= maxLength;
  
  // Set appropriate errors based on conditions
  if (startsWithSpace) {
    nameControl.setErrors({ 'startsWithSpace': true });
  } else if (containsOnlyWhitespace) {
    nameControl.setErrors({ 'containsOnlyWhitespace': true });
  } else if (containsDigit) {
    nameControl.setErrors({ 'containsDigit': true });
  }else if (!isLengthValid) {
    nameControl.setErrors({ 'invalidLength': true });
  } 
  else {
    nameControl.setErrors(null);
  }
}
//validation-Address
validateAddress(form: NgForm) {
  const addressControl = form.controls['PatientAddr'];

  // Check if the address contains only whitespace
  const containsOnlyWhitespace = /^\s*$/.test(addressControl.value);

  // Check if the address contains at least one non-whitespace character
  const containsNonWhitespace = /\S/.test(addressControl.value);
  // Check if the length is within the desired range
  const minLength = 3;
  const maxLength = 25;
  const isLengthValid = addressControl.value.length >= minLength && addressControl.value.length <= maxLength;


  // Set appropriate errors based on conditions
  if (containsOnlyWhitespace) {
    addressControl.setErrors({ 'containsOnlyWhitespace': true });
  } else if (!containsNonWhitespace) {
    addressControl.setErrors({ 'noNonWhitespace': true });
  }else if(!isLengthValid){
    addressControl.setErrors({'isvalidLength':true})
  }
   else {
    addressControl.setErrors(null);
  }
}
//validation-E-mail
validatePatientEmail(form: NgForm) {
  const emailControl = form.controls['PatientEmail'];

  // Check if the email contains only whitespace
  const containsOnlyWhitespace = /^\s*$/.test(emailControl.value);

  // Check if the email is a valid email address
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailControl.value);

  // Set appropriate errors based on conditions
  if (containsOnlyWhitespace) {
    emailControl.setErrors({ 'containsOnlyWhitespace': true });
  } else if (!isValidEmail) {
    emailControl.setErrors({ 'invalidEmail': true });
  } else {
    emailControl.setErrors(null);
  }
}

}
