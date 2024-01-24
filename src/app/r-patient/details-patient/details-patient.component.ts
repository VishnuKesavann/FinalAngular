import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import { PatientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {
  patientId:number;
  Patient_d:Patient=new Patient();
  constructor(private route:ActivatedRoute,private router:Router,private patientService:PatientService) { }

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
  }
  backtoPatientList(){
    this.router.navigate(['/patient/patient-list']);
  }
}
